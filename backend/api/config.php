<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

if (empty($config['public_key'])) {
    json_response(['error' => 'Defina public_key em api/config.local.php.'], 500);
}

json_response([
    'publicKey' => $config['public_key'],
    'isTestMode' => str_starts_with((string) $config['public_key'], 'TEST-'),
]);
