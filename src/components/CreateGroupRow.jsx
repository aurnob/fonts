import FontSelector from './FontSelector';

const CreateGroupRow = ({ index, row, availableFonts, register, errors, remove, selectedFonts }) => {
    const availableOptions = availableFonts.filter(
        (font) => !selectedFonts.includes(font.id.toString()) || font.id.toString() === row.fontName
    );

    return (
        <div className="flex items-center space-x-4 mb-3 border border-gray-100 shadow-md p-2">
            <input
                className={`block w-4/12 border ${errors.rows?.[index]?.inputFontName ? 'border-red-500' : 'border-gray-300'} rounded-sm shadow-sm font-medium text-gray-700 p-1`}
                placeholder="Font Name"
                {...register(`rows.${index}.inputFontName`)}
            />
            {errors.rows?.[index]?.inputFontName && (
                <p className="text-red-500 text-sm">{errors.rows[index].inputFontName.message}</p>
            )}

            <FontSelector
                index={index}
                availableOptions={availableOptions}
                register={register}
                selectedValue={row.fontName}
                errors={errors}
            />

            <div className="flex items-center justify-center w-6 h-6">
                <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-red-600"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default CreateGroupRow;
