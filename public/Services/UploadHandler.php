<?php

namespace App\Services;

class UploadHandler
{
    private $storage;
    private $dbService;

    public function __construct(DiskFileStorage $storage, DatabaseService $dbService)
    {
        $this->storage = $storage;
        $this->dbService = $dbService;  // Inject DatabaseService
    }

    public function handleUpload($file, $fontName, $fontPreview)
    {
        // Step 1: Validate and store the uploaded file
        $uploadedFilePath = $this->storage->store($file);

        if ($uploadedFilePath) {
            // Step 2: Save file and metadata to database
            $this->saveToDatabase($fontName, $fontPreview, $uploadedFilePath);

            return ["message" => "File uploaded successfully!"];
        } else {
            return ["error" => "Failed to upload the file."];
        }
    }

    private function saveToDatabase($fontName, $fontPreview, $filePath)
    {
        // Get the PDO connection from DatabaseService
        $pdo = $this->dbService->getConnection();

        // Prepare the SQL query to insert the file data into the 'fonts' table
        $query = "INSERT INTO fonts (font_name, font_preview, file_path, created_at, updated_at)
                  VALUES (:fontName, :fontPreview, :filePath, NOW(), NOW())";

        $stmt = $pdo->prepare($query);

        // Bind the values to the prepared statement
        $stmt->bindParam(':fontName', $fontName);
        $stmt->bindParam(':fontPreview', $fontPreview);
        $stmt->bindParam(':filePath', $filePath);

        // Execute the query to insert the data
        $stmt->execute();
    }
}
