<?php

namespace App\Controllers;

use App\Services\UploadHandler;
use App\Services\DiskFileStorage;
use App\Services\DatabaseService;

class UploadController
{
    private $uploadHandler;

    public function __construct()
    {
        // Create instances of the services
        $storage = new DiskFileStorage();
        $dbService = new DatabaseService();

        // Pass the services to the UploadHandler
        $this->uploadHandler = new UploadHandler($storage, $dbService);
    }

    public function upload()
    {
        // Handle the file upload
        if (!empty($_FILES['file']) && $_FILES['file']['error'] === 0) {
            $file = $_FILES['file'];
            $fontName = $_POST['fontName'] ?? null;
            $fontPreview = $_POST['fontPreview'] ?? null;

            // Call the upload handler
            $response = $this->uploadHandler->handleUpload($file, $fontName, $fontPreview);

            echo json_encode($response);
        } else {
            echo json_encode(["error" => "No file uploaded or an error occurred."]);
        }
    }
}
