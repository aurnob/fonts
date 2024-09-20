import { useEffect, useState, useRef } from 'react';
import { useGroupFonts } from '../hooks/useGroupFonts';
import { useCreateGroup } from '../hooks/useCreateGroup';
import CreateGroupRow from '../components/CreateGroupRow';
import CardHeader from '../components/CardHeader';

const CreateGroup = ({ editMode, existingGroup, onSubmit }) => {
    const availableFonts = useGroupFonts();
    const [loadingFonts, setLoadingFonts] = useState(true);
    const previousExistingGroupRef = useRef(existingGroup);

    useEffect(() => {
        if (availableFonts.length > 0) {
            setLoadingFonts(false);
        }
    }, [availableFonts]);

    const fontNames = Array.isArray(existingGroup?.font_names)
        ? existingGroup.font_names
        : JSON.parse(existingGroup?.font_names || '[]');

    const fonts = Array.isArray(existingGroup?.fonts)
        ? existingGroup.fonts
        : JSON.parse(existingGroup?.fonts || '[]');

    const combinedRows = fontNames.map((fontName, index) => ({
        inputFontName: fontName,
        fontName: fonts[index] || '',
    }));

    const { register, handleSubmit, handleFormSubmit, fields, append, remove, errors, reset } = useCreateGroup({
        groupTitle: existingGroup ? existingGroup.group_title : '',
        rows: editMode && combinedRows.length > 0
            ? combinedRows
            : [{ inputFontName: '', fontName: '' }],
    });

    if (loadingFonts) {
        return <div>Loading Fonts...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <CardHeader
                title={editMode ? "Edit Font Group" : "Create Font Group"}
                subTitle="You have to select at least two fonts"
            />

            <form onSubmit={handleSubmit(editMode ? onSubmit : handleFormSubmit)}>
                <div className="mb-4">
                    <input
                        type="text"
                        className={`mt-1 block w-full border ${errors.groupTitle ? 'border-red-500' : 'border-gray-300'} rounded-sm shadow-sm focus:ring focus:ring-opacity-50 p-1`}
                        placeholder="Group Title"
                        {...register('groupTitle')}
                    />
                    {errors.groupTitle && (
                        <p className="text-red-500 text-sm">{errors.groupTitle.message}</p>
                    )}
                </div>

                {fields.map((row, index) => (
                    <CreateGroupRow
                        key={row.id}
                        index={index}
                        row={row}
                        availableFonts={availableFonts}
                        register={register}
                        errors={errors}
                        remove={remove}
                        selectedFonts={fields.map((field) => field.fontName)}
                    />
                ))}

                <div className="flex justify-between items-center">
                    <button
                        type="button"
                        onClick={() => append({ inputFontName: '', fontName: '' })}
                        className="border-2 border-green-600 py-1 px-3 rounded-sm text-sm px-6"
                    >
                        + Add Row
                    </button>

                    <button
                        type="submit"
                        className="bg-green-600 text-white py-1 px-4 rounded-sm px-10"
                    >
                        {editMode ? "Update" : "Create"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateGroup;
