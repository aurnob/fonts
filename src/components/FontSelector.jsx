import React from 'react';

const FontSelector = ({ index, availableOptions, register, errors }) => {
    return (
        <select
            className={`block w-7/12 border ${errors.rows?.[index]?.fontName ? 'border-red-500' : 'border-gray-300'} rounded-sm shadow-sm focus:ring focus:ring-opacity-50 p-1`}
            {...register(`rows.${index}.fontName`)}
        >
            <option value="">Select a Font</option>
            {availableOptions.map((font) => (
                <option key={font.id} value={font.id}>
                    {font.tfontName}
                </option>
            ))}
        </select>
    );
};

export default FontSelector;
