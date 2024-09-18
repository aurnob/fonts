<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo json_encode(["message" => "Hello from PHP!"]);
} else {
    include_once("api/index.html");
}
