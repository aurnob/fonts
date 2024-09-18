<?php

namespace App\Services;

class DatabaseService
{
    protected $pdo;

    public function __construct()
    {
        $this->pdo = require __DIR__ . '/../database.php';
    }

    public function getConnection()
    {
        return $this->pdo;
    }
}
