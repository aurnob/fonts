import { useState, useEffect } from 'react';

export const useGroupFonts = () => {
    const [availableFonts, setAvailableFonts] = useState([]);

    useEffect(() => {
        fetch('/api/fonts')
            .then((response) => response.json())
            .then((data) => {
                const transformedFonts = data.map((font) => ({
                    ...font,
                    tfontName: font.file_path.slice(0, -4),
                }));
                setAvailableFonts(transformedFonts);
            })
            .catch((error) => console.error('Error fetching fonts:', error));
    }, []);

    return availableFonts;
};
