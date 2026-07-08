<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

$body = json_input();

try {
    $order = build_order($body['cartItems'] ?? [], $body['shipping'] ?? []);
    if (!$order['items'] || !($order['total'] > 0)) {
        json_response(['error' => 'Carrinho vazio ou com itens sem preco valido.'], 400);
    }

    $payload = build_payment_payload($order, $body['formData'] ?? [], $body['buyer'] ?? [], $config);
    $payment = mercado_pago_request('https://api.mercadopago.com/v1/payments', $payload, $config);

    json_response([
        'paymentId' => $payment['id'] ?? null,
        'status' => $payment['status'] ?? null,
        'statusDetail' => $payment['status_detail'] ?? null,
        'paymentMethodId' => $payment['payment_method_id'] ?? null,
        'subtotal' => $order['subtotal'],
        'shippingAmount' => $order['shippingAmount'],
        'amount' => $payment['transaction_amount'] ?? $order['total'],
        'pix' => [
            'code' => $payment['point_of_interaction']['transaction_data']['qr_code'] ?? null,
            'qrCodeBase64' => $payment['point_of_interaction']['transaction_data']['qr_code_base64'] ?? null,
        ],
        'boletoUrl' => $payment['transaction_details']['external_resource_url'] ?? null,
        'mercadoPagoResponse' => $payment,
    ]);
} catch (RuntimeException $error) {
    json_response(['error' => $error->getMessage()], 400);
}
