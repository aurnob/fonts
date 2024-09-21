<?php

namespace App\Controllers;

use App\Services\DatabaseService;
use PDOException;

class FontGroupController
{
    protected $db;

    public function __construct()
    {
        $this->db = (new DatabaseService())->getConnection();
    }

    public function createFontGroup($data)
    {
        $groupTitle = $data['groupTitle'] ?? null;
        $fontNames = $data['fontNames'] ?? [];
        $fonts = $data['fonts'] ?? [];

        if (empty($groupTitle) || count($fonts) < 2) {
            echo json_encode(['error' => 'You must provide a group title and select at least two fonts.']);
        }

        try {
            $stmt = $this->db->prepare("INSERT INTO font_groups (group_title, font_names, fonts, created_at, updated_at) VALUES (:groupTitle, :fontNames, :fonts, NOW(), NOW())");
            $stmt->execute([
                ':groupTitle' => $groupTitle,
                ':fontNames' => json_encode($fontNames),
                ':fonts' => json_encode($fonts),
            ]);

            echo json_encode(['success' => 'Font group created successfully!']);
        } catch (PDOException $e) {
            echo json_encode(['error' => 'An error occurred while creating the font group.', 'details' => $e->getMessage()]);
        }
    }

    public function getGroupList()
    {
        $stmt = $this->db->prepare("SELECT * FROM font_groups");
        $stmt->execute();
        $groups = $stmt->fetchAll();

        echo json_encode($groups);
    }


    public function updateFontGroup($groupId, $data)
    {
        $groupTitle = $data['groupTitle'] ?? null;
        $rows = $data['rows'] ?? [];

        $fontNames = array_map(fn($row) => $row['inputFontName'] ?? '', $rows);
        $fonts = array_map(fn($row) => $row['fontName'] ?? '', $rows);

        if (empty($groupTitle) || count($fonts) < 2) {
            echo json_encode(['error' => 'You must provide a group title and select at least two fonts.']);
            return;
        }

        try {
            $stmt = $this->db->prepare(
                "UPDATE font_groups 
                SET group_title = :groupTitle, font_names = :fontNames, fonts = :fonts, updated_at = NOW() 
                WHERE id = :groupId"
            );
            $stmt->execute([
                ':groupTitle' => $groupTitle,
                ':fontNames'  => json_encode($fontNames),
                ':fonts'      => json_encode($fonts),
                ':groupId'    => $groupId,
            ]);

            echo json_encode(
                $stmt->rowCount() > 0
                    ? ['success' => 'Font group updated successfully!']
                    : ['error' => 'No changes made or font group not found.']
            );
        } catch (PDOException $e) {
            echo json_encode(['error' => 'An error occurred while updating the font group.', 'details' => $e->getMessage()]);
        }
    }


    public function deleteFontGroup($id)
    {
        try {
            $stmt = $this->db->prepare("DELETE FROM font_groups WHERE id = :id");
            $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => 'Font group deleted successfully!']);
            } else {
                echo json_encode(['error' => 'Font group not found.']);
            }
        } catch (PDOException $e) {
            echo json_encode(['error' => 'An error occurred while deleting the font group.', 'details' => $e->getMessage()]);
        }
    }
}
