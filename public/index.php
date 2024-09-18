<?php
require_once __DIR__ . '/../vendor/autoload.php'; // Ensure Composer's autoloader is included

use App\Upload\UploadHandler;
use App\Validators\TtfFileValidator;
use App\Storage\DiskFileStorage;

$requestUri = $_SERVER['REQUEST_URI'];
$requestUri = strtok($requestUri, '?');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (strpos($requestUri, '/api/upload') !== false) {
        $fileValidator = new TtfFileValidator();
        $fileStorage = new DiskFileStorage();
        $uploadHandler = new UploadHandler($fileValidator, $fileStorage);
        $uploadHandler->handleUpload();
    } else {
        echo json_encode(["message" => "Unknown API endpoint"]);
    }
} else {
    echo "test proxy";
}
