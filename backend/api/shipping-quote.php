<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

$body = json_input();

try {
    $quote = calculate_shipping_quote($body['zip'] ?? '', $body['cartItems'] ?? []);
    json_response($quote);
} catch (RuntimeException $error) {
    json_response(['error' => $error->getMessage()], 400);
}
