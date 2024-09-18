import { useState } from 'react';
import toast from 'react-hot-toast';

export const useFileUpload = (reset) => {
    const [progress, setProgress] = useState({});
    const [error, setError] = useState("");

    const handleFileUpload = (files, fontName, fontPreview) => {
        [...files].forEach((file) => {
            if (file.type === "font/ttf" || file.name.endsWith(".ttf")) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("fontName", fontName);
                formData.append("fontPreview", fontPreview);

                const xhr = new XMLHttpRequest();

                xhr.open("POST", "/api/upload");

                xhr.upload.addEventListener("progress", (event) => {
                    if (event.lengthComputable) {
                        const percentage = (event.loaded / event.total) * 100;
                        setProgress((prev) => ({
                            ...prev,
                            [file.name]: percentage,
                        }));
                    }
                });

                xhr.addEventListener("load", () => {
                    if (xhr.status === 200) {
                        const response = JSON.parse(xhr.responseText);
                        if (response.error) {
                            toast.error(response.error); // Show server error
                        } else {
                            setProgress((prev) => ({
                                ...prev,
                                [file.name]: 100,
                            }));
                            reset(); // Reset the form after successful upload
                            toast.success(response.message); // Show success message
                        }
                    } else {
                        toast.error("File upload failed.");
                    }
                });

                xhr.send(formData);
            } else {
                toast.error("Only TTF files are allowed!");
            }
        });
    };

    return {
        progress,
        error,
        handleFileUpload,
        setError,
    };
};
