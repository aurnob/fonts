<?php

namespace App\Upload;

use App\Validators\FileValidatorInterface;
use App\Storage\FileStorageInterface;

class UploadHandler
{
    private $fileValidator;
    private $fileStorage;

    public function __construct(FileValidatorInterface $fileValidator, FileStorageInterface $fileStorage)
    {
        $this->fileValidator = $fileValidator;
        $this->fileStorage = $fileStorage;
    }

    public function handleUpload()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (!empty($_FILES['file']) && $_FILES['file']['error'] === 0) {
                return $this->processFileUpload($_FILES['file']);
            } else {
                return $this->jsonResponse(["error" => "No file uploaded or an error occurred."], 400);
            }
        } else {
            return $this->jsonResponse(["error" => "Method not allowed"], 405);
        }
    }

    private function processFileUpload($file)
    {
        if (!$this->fileValidator->validate($file)) {
            return $this->jsonResponse(["error" => $this->fileValidator->getError()], 400);
        }

        if (!$this->fileStorage->store($file)) {
            return $this->jsonResponse(["error" => $this->fileStorage->getError()], 500);
        }

        return $this->jsonResponse(["message" => "File uploaded successfully!", "filename" => basename($file['name'])]);
    }

    private function jsonResponse($data, $statusCode = 200)
    {
        http_response_code($statusCode);
        echo json_encode($data);
        exit;
    }
}
