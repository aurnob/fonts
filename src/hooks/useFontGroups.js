import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const useFontGroups = () => {
    const [fontGroups, setFontGroups] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [groupToEdit, setGroupToEdit] = useState(null);

    const fetchFontGroups = () => {
        fetch('/api/font-groups')
            .then((response) => response.json())
            .then((data) => setFontGroups(data))
            .catch(() => toast.error("Error fetching font groups."));
    };

    useEffect(() => {
        fetchFontGroups();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this font group?")) {
            fetch(`/api/font-groups/${id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        toast.success("Font Group deleted successfully!");
                        setFontGroups(fontGroups.filter(group => group.id !== id));
                    } else {
                        toast.error("Failed to delete Font Group.");
                    }
                })
                .catch(() => toast.error("Error occurred while deleting the font group."));
        }
    };

    const handleEdit = (group) => {
        setGroupToEdit(group);
        setIsModalOpen(true); // Open modal with the group data
    };

    const handleEditSubmit = (data) => {
        fetch(`/api/font-groups/${groupToEdit.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((updatedGroup) => {
                if (updatedGroup.success) {
                    toast.success("Font Group updated successfully!");
                    setIsModalOpen(false);
                    fetchFontGroups(); // Refetch the updated font groups
                } else {
                    toast.error("Failed to update Font Group.");
                }
            })
            .catch(() => toast.error("Error occurred while updating the font group."));
    };

    return {
        fontGroups,
        isModalOpen,
        groupToEdit,
        setIsModalOpen,
        handleDelete,
        handleEdit,
        handleEditSubmit,
    };
};
