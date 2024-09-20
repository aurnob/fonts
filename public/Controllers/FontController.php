<?php

namespace App\Controllers;

use App\Services\DatabaseService;

class FontController
{
    protected $db;

    public function __construct()
    {
        $this->db = (new DatabaseService())->getConnection();
    }

    public function getFontList()
    {
        $stmt = $this->db->prepare("SELECT * FROM fonts");
        $stmt->execute();
        $fonts = $stmt->fetchAll();

        echo json_encode($fonts);
    }

    public function deleteFont($fontId)
    {
        $stmt = $this->db->prepare('SELECT file_path FROM fonts WHERE id = :id');
        $stmt->execute(['id' => $fontId]);
        $font = $stmt->fetch();

        if ($font) {
            $filePath = __DIR__ . '/../uploads/' . $font['file_path'];
            if (file_exists($filePath)) {
                unlink($filePath);
            }

            $stmt = $this->db->prepare("DELETE FROM fonts WHERE id = :id");
            $stmt->bindParam(':id', $fontId, \PDO::PARAM_INT);

            if ($stmt->execute()) {
                echo json_encode(['message' => 'Font deleted successfully']);
            } else {
                echo json_encode(['error' => 'Failed to delete font']);
            }
        } else {
            echo json_encode(['error' => 'Font is not available.']);
        }
    }
}
