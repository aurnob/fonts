<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_FILES['file']) && $_FILES['file']['error'] === 0) {
        $file = $_FILES['file'];
        $allowedMimeTypes = ['font/ttf'];
        $uploadDir = __DIR__ . '/../uploads/';

        if (!in_array($file['type'], $allowedMimeTypes)) {
            echo json_encode(["error" => "Only TTF files are allowed."]);
            exit;
        }

        // Move file to the uploads directory
        $filename = basename($file['name']);
        $targetFile = $uploadDir . $filename;

        if (!move_uploaded_file($file['tmp_name'], $targetFile)) {
            echo json_encode(["error" => "Failed to upload the file."]);
            exit;
        }

        echo json_encode(["message" => "File uploaded successfully!", "filename" => $filename]);
    } else {
        echo json_encode(["error" => "No file uploaded or an error occurred."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
