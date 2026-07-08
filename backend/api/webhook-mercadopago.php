<?php
declare(strict_types=1);

file_put_contents(
    __DIR__ . '/webhook.log',
    '[' . date('c') . '] ' . file_get_contents('php://input') . PHP_EOL,
    FILE_APPEND
);

http_response_code(200);
header('Content-Type: application/json; charset=utf-8');
echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
