<?php

use App\Controllers\UploadController;
use App\Controllers\FontController;
use App\Controllers\FontGroupController;

$requestUri = strtok($_SERVER['REQUEST_URI'], '?');
$requestMethod = $_SERVER['REQUEST_METHOD'];

switch (true) {
        // Handle file upload
    case $requestMethod === 'POST' && strpos($requestUri, '/api/upload') !== false:
        $controller = new UploadController();
        $controller->upload();
        break;

        // Get font list
    case $requestMethod === 'GET' && strpos($requestUri, '/api/fonts') !== false:
        $controller = new FontController();
        $controller->getFontList();
        break;

        // Delete a font
    case $requestMethod === 'POST' && strpos($requestUri, '/api/fonts/delete') !== false:
        $controller = new FontController();
        $data = json_decode(file_get_contents("php://input"), true);
        $controller->deleteFont($data['id']);
        break;

        // Create a font group
    case $requestMethod === 'POST' && strpos($requestUri, '/api/font-group') !== false:
        $controller = new FontGroupController();
        $data = json_decode(file_get_contents("php://input"), true);
        $controller->createFontGroup($data);
        break;

        // Get all font groups
    case $requestMethod === 'GET' && strpos($requestUri, '/api/font-groups') !== false:
        $controller = new FontGroupController();
        $controller->getGroupList();
        break;

        // Update a font group
    case $requestMethod === 'PUT' && strpos($requestUri, '/api/font-groups/') !== false:
        $groupId = intval(basename($requestUri));
        if ($groupId) {
            $controller = new FontGroupController();
            $data = json_decode(file_get_contents("php://input"), true);
            $controller->updateFontGroup($groupId, $data);
        } else {
            echo json_encode(['error' => 'Invalid group ID.']);
        }
        break;

        // Delete a font group
    case $requestMethod === 'DELETE' && strpos($requestUri, '/api/font-groups/') !== false:
        $groupId = intval(basename($requestUri));
        $controller = new FontGroupController();
        $controller->deleteFontGroup($groupId);
        break;

        // Handle unknown routes
    default:
        echo json_encode(["error" => "Unknown API endpoint"]);
        break;
}
