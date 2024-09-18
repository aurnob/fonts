<?php

namespace App\Storage;

interface FileStorageInterface
{
    public function store($file): bool;
    public function getError(): string;
}
