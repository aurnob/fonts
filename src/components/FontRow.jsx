const FontRow = ({ font, onDelete }) => {
    return (
        <tr>
            <td className="py-4 px-6 border-b border-gray-200">{font.fontName}</td>
            <td className="py-4 px-6 border-b border-gray-200 truncate">
                <p style={{ fontFamily: font.fontName }}>
                    The quick brown fox jumps over the lazy dog.
                </p>
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-right">
                <span
                    className="text-red-400 py-1 px-2 rounded-full text-s cursor-pointer"
                    onClick={() => onDelete(font.id)}
                >
                    Delete
                </span>
            </td>
        </tr>
    );
};

export default FontRow;
