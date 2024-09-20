<?php
require_once __DIR__ . '/config/bootstrap.php';

use App\Controllers\UploadController;
use App\Controllers\FontController;
use App\Controllers\FontGroupController;

$requestUri = strtok($_SERVER['REQUEST_URI'], '?');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && strpos($requestUri, '/api/upload') !== false) {
    $controller = new UploadController();
    $controller->upload();
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && strpos($requestUri, '/api/fonts') !== false) {
    $controller = new FontController();
    $controller->getFontList();
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && strpos($requestUri, '/api/fonts/delete') !== false) {
    $controller = new FontController();
    $data = json_decode(file_get_contents("php://input"), true);
    $controller->deleteFont($data['id']);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && strpos($requestUri, '/api/font-group') !== false) {
    $controller = new FontGroupController();
    $data = json_decode(file_get_contents("php://input"), true);
    $controller->createFontGroup($data);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && strpos($requestUri, '/api/font-groups') !== false) {
    $controller = new FontGroupController();
    $controller->getGroupList();
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT' && strpos($requestUri, '/api/font-groups/') !== false) {
    $groupId = intval(basename($requestUri));

    if ($groupId) {
        $controller = new FontGroupController();
        $data = json_decode(file_get_contents("php://input"), true);
        $controller->updateFontGroup($groupId, $data);
    } else {
        echo json_encode(['error' => 'Invalid group ID.']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE' && strpos($requestUri, '/api/font-groups/') !== false) {
    $groupId = intval(basename($requestUri));
    $controller = new FontGroupController();
    $controller->deleteFontGroup($groupId);
} else {
    echo json_encode(["error" => "Unknown API endpoint"]);
}
