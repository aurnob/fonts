<?php

namespace App\Services;

class UploadHandler
{
    private $storage;
    private $dbService;

    public function __construct(DiskFileStorage $storage, DatabaseService $dbService)
    {
        $this->storage = $storage;
        $this->dbService = $dbService;
    }

    public function handleUpload($file, $fontName, $fontPreview)
    {
        $uploadedFilePath = $this->storage->store($file);

        if ($uploadedFilePath) {
            $this->saveToDatabase($fontName, $fontPreview, $uploadedFilePath);

            return ["message" => "File uploaded successfully!"];
        } else {
            return ["error" => "Failed to upload the file."];
        }
    }

    private function saveToDatabase($fontName, $fontPreview, $filePath)
    {
        $pdo = $this->dbService->getConnection();

        $query = "INSERT INTO fonts (file_path, created_at, updated_at)
                  VALUES (:filePath, NOW(), NOW())";

        $stmt = $pdo->prepare($query);

        $stmt->bindParam(':filePath', $filePath);

        $stmt->execute();
    }
}
