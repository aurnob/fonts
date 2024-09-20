import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useFonts = () => {
    const [fonts, setFonts] = useState([]);

    useEffect(() => {
        fetch('/api/fonts')
            .then((response) => response.json())
            .then((data) => {
                const transformedFonts = data.map((font) => ({
                    ...font,
                    fontName: font.file_path.slice(0, -4),
                }));
                setFonts(transformedFonts);
            })
            .catch((error) => console.error('Error fetching fonts:', error));
    }, []);

    const deleteFont = (id) => {
        if (window.confirm('Are you sure you want to delete this font?')) {
            fetch('/api/fonts/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.error) {
                        toast.error(data.error);
                    } else {
                        setFonts((prevFonts) => prevFonts.filter((font) => font.id !== id));
                        toast.success('Font deleted successfully');
                    }
                })
                .catch(() => {
                    toast.error('An error occurred while deleting the font');
                });
        }
    };

    return { fonts, deleteFont };
};
