<?php

namespace App\Services;

class DiskFileStorage
{
    private $uploadDir;

    public function __construct()
    {
        $this->uploadDir = __DIR__ . '/../uploads/';
        $this->ensureUploadDirectoryExists();
    }

    private function ensureUploadDirectoryExists()
    {
        if (!is_dir($this->uploadDir)) {
            mkdir($this->uploadDir, 0777, true);
        }
    }

    public function store($file)
    {
        $filename = basename($file['name']);
        $targetFile = $this->uploadDir . $filename;

        if (!move_uploaded_file($file['tmp_name'], $targetFile)) {
            throw new \Exception('Failed to upload the file.');
        }

        return $filename; // Return the filename or path for reference
    }
}
