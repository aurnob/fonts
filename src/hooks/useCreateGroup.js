import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

const fontGroupSchema = z.object({
    groupTitle: z.string().min(1, 'Group title is required'),
    rows: z.array(
        z.object({
            inputFontName: z.string().min(1, 'Font name is required'),
            fontName: z.string().min(1, 'Font selection is required'),
        })
    ),
});

export const useCreateGroup = (defaultValues, isEditMode, groupId) => {
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: zodResolver(fontGroupSchema),
        defaultValues,
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'rows',
    });

    // Updated handleFormSubmit to handle both create and edit
    const handleFormSubmit = (data) => {
        const selectedFonts = data.rows;

        if (selectedFonts.length < 2) {
            toast.error('You must select at least two fonts.');
            return;
        }

        const formData = {
            groupTitle: data.groupTitle,
            fontNames: selectedFonts.map((row) => row.inputFontName),
            fonts: selectedFonts.map((row) => row.fontName),
        };

        const method = isEditMode ? 'PUT' : 'POST';
        const endpoint = isEditMode ? `/api/font-groups/${groupId}` : '/api/font-groups';

        fetch(endpoint, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    toast.success(isEditMode ? 'Font Group Updated Successfully!' : 'Font Group Created Successfully!');
                    reset(); // Reset form after success
                } else {
                    toast.error(isEditMode ? 'Failed to update the Font Group.' : 'Failed to create the Font Group.');
                }
            })
            .catch(() => {
                toast.error('An error occurred while processing the request.');
            });
    };

    return { register, handleSubmit, handleFormSubmit, fields, append, remove, errors, reset };
};
