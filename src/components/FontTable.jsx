import { useFonts } from '../hooks/useFonts';
import FontRow from './FontRow';

const FontTable = () => {
    const { fonts, deleteFont } = useFonts();

    return (
        <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
            <table className="w-full table-fixed">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="w-3/8 py-4 px-6 text-left text-gray-600 font-bold uppercase">Font Name</th>
                        <th className="w-4/8 py-4 px-6 text-left text-gray-600 font-bold uppercase">Font Preview</th>
                        <th className="w-1/8 py-4 px-6 text-left text-gray-600 font-bold uppercase"></th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {fonts.map((font) => (
                        <FontRow key={font.id} font={font} onDelete={deleteFont} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FontTable;