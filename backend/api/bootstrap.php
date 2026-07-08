<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$configPath = __DIR__ . '/config.local.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Crie o arquivo api/config.local.php com suas credenciais do Mercado Pago.',
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$config = require $configPath;
$logisticsPath = dirname(__DIR__) . '/logistica/base-frete-correios.json';
$logisticsBase = file_exists($logisticsPath)
    ? json_decode((string) file_get_contents($logisticsPath), true)
    : ['meta' => ['origin' => ['postal_code' => '15061-090']], 'products' => []];

function json_input(): array
{
    $raw = file_get_contents('php://input');
    if (!$raw) return [];
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function normalize_digits($value): string
{
    return preg_replace('/\D+/', '', (string) $value) ?? '';
}

function normalize_string($value): string
{
    return trim((string) $value);
}

function round_money($value): float
{
    return round((float) $value, 2);
}

function product_prices(): array
{
    static $prices = null;
    global $logisticsBase;
    if ($prices !== null) return $prices;

    $prices = [];
    foreach (($logisticsBase['products'] ?? []) as $product) {
        $id = normalize_string($product['id'] ?? '');
        $price = (float) ($product['price_brl'] ?? 0);
        if ($id !== '' && $price > 0) {
            $prices[$id] = round_money($price);
        }
    }

    return $prices;
}

function product_catalog(): array
{
    static $catalog = null;
    global $logisticsBase;
    if ($catalog !== null) return $catalog;

    $catalog = [];
    foreach (($logisticsBase['products'] ?? []) as $product) {
        $id = normalize_string($product['id'] ?? '');
        if ($id === '') continue;

        $catalog[$id] = [
            'price' => round_money((float) ($product['price_brl'] ?? 0)),
            'shippingEnabled' => (bool) ($product['shipping_enabled'] ?? false),
            'weightKg' => (float) ($product['weight_kg'] ?? 0),
            'widthCm' => (float) ($product['width_cm'] ?? 0),
            'heightCm' => (float) ($product['height_cm'] ?? 0),
            'lengthCm' => (float) ($product['length_cm'] ?? 0),
            'dataStatus' => normalize_string($product['data_status'] ?? ''),
            'name' => normalize_string($product['name'] ?? $id),
        ];
    }

    return $catalog;
}

function origin_postal_code(): string
{
    global $logisticsBase;
    $zip = normalize_digits($logisticsBase['meta']['origin']['postal_code'] ?? '');
    return strlen($zip) === 8 ? $zip : '15061090';
}

function detect_destination_region(string $zip): array
{
    $prefix = (int) substr($zip, 0, 2);

    if ($prefix >= 1 && $prefix <= 19) {
        return [
            'code' => 'sp',
            'label' => 'SP',
            'pacBase' => 14.9,
            'sedexBase' => 23.9,
            'pacWeightRate' => 7.2,
            'sedexWeightRate' => 10.4,
            'pacDays' => '3 a 5 dias uteis',
            'sedexDays' => '1 a 3 dias uteis',
            'pacExtraItem' => 1.25,
            'sedexExtraItem' => 1.75,
        ];
    }

    if (($prefix >= 20 && $prefix <= 39) || $prefix === 13) {
        return [
            'code' => 'sudeste',
            'label' => 'Sudeste',
            'pacBase' => 18.9,
            'sedexBase' => 29.9,
            'pacWeightRate' => 8.4,
            'sedexWeightRate' => 12.6,
            'pacDays' => '4 a 6 dias uteis',
            'sedexDays' => '2 a 4 dias uteis',
            'pacExtraItem' => 1.5,
            'sedexExtraItem' => 2.1,
        ];
    }

    if (($prefix >= 80 && $prefix <= 99) || ($prefix >= 70 && $prefix <= 79)) {
        return [
            'code' => 'sul_centro',
            'label' => 'Sul e Centro-Oeste',
            'pacBase' => 23.9,
            'sedexBase' => 36.9,
            'pacWeightRate' => 9.8,
            'sedexWeightRate' => 14.9,
            'pacDays' => '5 a 8 dias uteis',
            'sedexDays' => '2 a 5 dias uteis',
            'pacExtraItem' => 1.9,
            'sedexExtraItem' => 2.6,
        ];
    }

    if ($prefix >= 40 && $prefix <= 69) {
        return [
            'code' => 'nordeste',
            'label' => 'Nordeste',
            'pacBase' => 29.9,
            'sedexBase' => 44.9,
            'pacWeightRate' => 11.6,
            'sedexWeightRate' => 17.4,
            'pacDays' => '6 a 9 dias uteis',
            'sedexDays' => '3 a 6 dias uteis',
            'pacExtraItem' => 2.2,
            'sedexExtraItem' => 3.1,
        ];
    }

    return [
        'code' => 'norte',
        'label' => 'Norte',
        'pacBase' => 36.9,
        'sedexBase' => 54.9,
        'pacWeightRate' => 13.8,
        'sedexWeightRate' => 20.6,
        'pacDays' => '7 a 11 dias uteis',
        'sedexDays' => '4 a 7 dias uteis',
        'pacExtraItem' => 2.6,
        'sedexExtraItem' => 3.7,
    ];
}

function normalize_cart_items(array $input): array
{
    $catalog = product_catalog();
    $items = [];

    foreach ($input as $entry) {
        $id = normalize_string($entry['id'] ?? '');
        if ($id === '' || !isset($catalog[$id])) continue;

        $qty = max(1, (int) ($entry['qty'] ?? 1));
        $unitPrice = round_money($catalog[$id]['price']);
        if ($unitPrice <= 0) continue;

        $items[] = [
            'id' => $id,
            'qty' => $qty,
            'unitPrice' => $unitPrice,
            'total' => round_money($unitPrice * $qty),
            'weightKg' => (float) $catalog[$id]['weightKg'],
            'widthCm' => (float) $catalog[$id]['widthCm'],
            'heightCm' => (float) $catalog[$id]['heightCm'],
            'lengthCm' => (float) $catalog[$id]['lengthCm'],
            'volumeCm3' => round_money(
                (float) $catalog[$id]['widthCm'] *
                (float) $catalog[$id]['heightCm'] *
                (float) $catalog[$id]['lengthCm']
            ),
            'shippingEnabled' => (bool) $catalog[$id]['shippingEnabled'],
            'dataStatus' => (string) $catalog[$id]['dataStatus'],
            'name' => (string) $catalog[$id]['name'],
        ];
    }

    return $items;
}

function calculate_shipping_quote($zip, array $cartItems): array
{
    $normalizedZip = normalize_digits($zip);
    if (strlen($normalizedZip) !== 8) {
        throw new RuntimeException('CEP invalido para calculo de frete.');
    }

    $items = normalize_cart_items($cartItems);
    if (!$items) {
        throw new RuntimeException('Carrinho vazio para calculo de frete.');
    }

    foreach ($items as $item) {
        if (
            !$item['shippingEnabled'] ||
            $item['weightKg'] <= 0 ||
            $item['widthCm'] <= 0 ||
            $item['heightCm'] <= 0 ||
            $item['lengthCm'] <= 0
        ) {
            throw new RuntimeException('Alguns produtos ainda nao possuem dados logisticos suficientes para calcular o frete.');
        }
    }

    $quantity = array_reduce($items, fn ($sum, $item) => $sum + $item['qty'], 0);
    $actualWeight = array_reduce($items, fn ($sum, $item) => $sum + ($item['weightKg'] * $item['qty']), 0.0);
    $totalVolumeCm3 = array_reduce($items, fn ($sum, $item) => $sum + ($item['volumeCm3'] * $item['qty']), 0.0);
    $volumetricWeight = $totalVolumeCm3 / 6000;
    $billableWeight = round_money(max($actualWeight, $volumetricWeight, 0.3));
    $extraItems = max(0, $quantity - 1);
    $region = detect_destination_region($normalizedZip);

    $options = [
        [
            'code' => 'PAC',
            'serviceLabel' => 'Correios PAC - ' . $region['label'],
            'estimate' => $region['pacDays'],
            'amount' => round_money($region['pacBase'] + ($billableWeight * $region['pacWeightRate']) + ($extraItems * $region['pacExtraItem'])),
        ],
        [
            'code' => 'SEDEX',
            'serviceLabel' => 'Correios SEDEX - ' . $region['label'],
            'estimate' => $region['sedexDays'],
            'amount' => round_money($region['sedexBase'] + ($billableWeight * $region['sedexWeightRate']) + ($extraItems * $region['sedexExtraItem'])),
        ],
    ];
    usort($options, fn ($a, $b) => $a['amount'] <=> $b['amount']);
    $selected = $options[0];

    return [
        'zip' => $normalizedZip,
        'originZip' => origin_postal_code(),
        'amount' => $selected['amount'],
        'quantity' => $quantity,
        'estimate' => $selected['estimate'],
        'serviceLabel' => $selected['serviceLabel'],
        'serviceCode' => $selected['code'],
        'options' => $options,
        'region' => $region['label'],
        'actualWeightKg' => round_money($actualWeight),
        'volumetricWeightKg' => round_money($volumetricWeight),
        'billableWeightKg' => $billableWeight,
        'quoteModel' => 'correios_estimado_base_local',
    ];
}

function build_order(array $cartItems, array $shipping = []): array
{
    $items = normalize_cart_items($cartItems);
    $subtotal = round_money(array_reduce($items, fn ($sum, $item) => $sum + $item['total'], 0.0));
    $quantity = array_reduce($items, fn ($sum, $item) => $sum + $item['qty'], 0);

    $shippingAmount = 0.0;
    $shippingLabel = 'Retirada no salao';

    if (($shipping['mode'] ?? 'pickup') === 'delivery') {
        $quote = calculate_shipping_quote($shipping['zip'] ?? '', $cartItems);
        $shippingAmount = (float) $quote['amount'];
        $shippingLabel = (string) $quote['serviceLabel'];
    }

    return [
        'items' => $items,
        'subtotal' => $subtotal,
        'shippingAmount' => round_money($shippingAmount),
        'shippingLabel' => $shippingLabel,
        'total' => round_money($subtotal + $shippingAmount),
        'quantity' => $quantity,
        'description' => $quantity === 1 ? 'Pedido Becker - 1 item' : "Pedido Becker - {$quantity} itens",
    ];
}

function build_payer(array $formData, array $buyer): array
{
    $cpf = normalize_digits(
        $buyer['cpf'] ?? $formData['payer']['identification']['number'] ?? $formData['identificationNumber'] ?? ''
    );
    $phone = normalize_digits(
        $buyer['phone'] ?? $formData['payer']['phone']['number'] ?? $formData['phone']['number'] ?? ''
    );
    $fallbackSeed = $cpf !== '' ? $cpf : ($phone !== '' ? $phone : (string) time());

    $fullName = normalize_string($buyer['fullName'] ?? '');
    $parts = preg_split('/\s+/', $fullName) ?: [];
    $firstName = $parts[0] ?? '';
    $lastName = count($parts) > 1 ? implode(' ', array_slice($parts, 1)) : '';

    $payer = [
        'email' => normalize_string(
            $buyer['email'] ?? $formData['payer']['email'] ?? $formData['email'] ?? $formData['cardholderEmail'] ?? ''
        ) ?: "cliente-{$fallbackSeed}@becker-checkout.example.com",
    ];

    if ($firstName !== '') $payer['first_name'] = $firstName;
    if ($lastName !== '') $payer['last_name'] = $lastName;

    if (strlen($cpf) === 11) {
        $payer['identification'] = [
            'type' => 'CPF',
            'number' => $cpf,
        ];
    }

    return $payer;
}

function build_payment_payload(array $order, array $formData, array $buyer, array $config): array
{
    $paymentMethodId = normalize_string($formData['payment_method_id'] ?? $formData['paymentMethodId'] ?? '');
    if ($paymentMethodId === '') {
        throw new RuntimeException('Metodo de pagamento nao informado pelo checkout.');
    }

    $payload = [
        'transaction_amount' => $order['total'],
        'description' => $order['description'],
        'payment_method_id' => $paymentMethodId,
        'payer' => build_payer($formData, $buyer),
        'external_reference' => 'becker-' . time(),
    ];

    if (!empty($config['webhook_url'])) {
        $payload['notification_url'] = $config['webhook_url'];
    }

    if ($paymentMethodId === 'pix') {
        return $payload;
    }

    $payload['token'] = normalize_string($formData['token'] ?? '');
    $payload['installments'] = max(1, (int) ($formData['installments'] ?? 1));
    $issuerId = (int) ($formData['issuer_id'] ?? $formData['issuerId'] ?? 0);
    if ($issuerId > 0) $payload['issuer_id'] = $issuerId;

    if ($payload['token'] === '') {
        throw new RuntimeException('Token do cartao nao foi recebido.');
    }

    return $payload;
}

function mercado_pago_request(string $url, array $payload, array $config): array
{
    if (empty($config['access_token'])) {
        throw new RuntimeException('Defina access_token em api/config.local.php.');
    }

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $config['access_token'],
            'Content-Type: application/json',
            'X-Idempotency-Key: ' . bin2hex(random_bytes(16)),
        ],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
    ]);

    $responseBody = curl_exec($ch);
    $statusCode = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($responseBody === false) {
        throw new RuntimeException($curlError !== '' ? $curlError : 'Falha ao conectar com o Mercado Pago.');
    }

    $decoded = json_decode($responseBody, true);
    $data = is_array($decoded) ? $decoded : [];

    if ($statusCode < 200 || $statusCode >= 300) {
        $message = $data['message'] ?? $data['cause'][0]['description'] ?? 'Mercado Pago recusou a solicitacao.';
        throw new RuntimeException($message);
    }

    return $data;
}
