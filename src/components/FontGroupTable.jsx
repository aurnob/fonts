const FontGroupTable = ({ fontGroups, onEdit, onDelete }) => {
    return (
        <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-sm">
            <thead className="bg-gray-100">
                <tr>
                    <th className="px-6 py-2 text-left text-sm font-medium text-gray-700">NAME</th>
                    <th className="px-6 py-2 text-left text-sm font-medium text-gray-700">FONTS</th>
                    <th className="px-6 py-2 text-left text-sm font-medium text-gray-700">COUNT</th>
                    <th className="px-6 py-2"></th>
                </tr>
            </thead>
            <tbody>
                {fontGroups.map((group) => {
                    const fontNames = Array.isArray(group.font_names) ? group.font_names : JSON.parse(group.font_names || '[]');
                    return (
                        <tr key={group.id} className="bg-white border-b">
                            <td className="px-6 py-2">{group.group_title}</td>
                            <td className="px-6 py-2">{fontNames.join(', ')}</td> {/* Display font names */}
                            <td className="px-6 py-2">{fontNames.length}</td>
                            <td className="px-6 py-2">
                                <button
                                    onClick={() => onEdit(group)}
                                    className="text-blue-500 hover:underline mr-4"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(group.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default FontGroupTable;
