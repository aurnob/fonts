<?php
require_once __DIR__ . '/config/bootstrap.php';

use App\Controllers\UploadController;

$requestUri = strtok($_SERVER['REQUEST_URI'], '?');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && strpos($requestUri, '/api/upload') !== false) {
    $controller = new UploadController();

    $controller->upload();
} else {
    echo json_encode(["error" => "Unknown API endpoint"]);
}
