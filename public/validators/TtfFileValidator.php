<?php

namespace App\Validators;

class TtfFileValidator implements FileValidatorInterface
{
    private $allowedMimeTypes = ['font/ttf'];
    private $error = '';

    public function validate($file): bool
    {
        if (!in_array($file['type'], $this->allowedMimeTypes)) {
            $this->error = "Only TTF files are allowed.";
            return false;
        }
        return true;
    }

    public function getError(): string
    {
        return $this->error;
    }
}
