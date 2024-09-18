<?php

namespace App\Validators;

interface FileValidatorInterface
{
    public function validate($file): bool;
    public function getError(): string;
}
