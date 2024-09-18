<?php

namespace App\Storage;

class DiskFileStorage implements FileStorageInterface
{
    private $uploadDir;
    private $error = '';

    public function __construct()
    {
        $this->uploadDir = __DIR__ . '/../uploads/';
    }

    public function store($file): bool
    {
        $filename = basename($file['name']);
        $targetFile = $this->uploadDir . $filename;

        if (!move_uploaded_file($file['tmp_name'], $targetFile)) {
            $this->error = "Failed to upload the file.";
            return false;
        }

        return true;
    }

    public function getError(): string
    {
        return $this->error;
    }
}
