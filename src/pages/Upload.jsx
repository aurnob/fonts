import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import FormInput from '../components/form/FormInput';
import UploadBox from '../components/form/UploadBox';
import ProgressBar from '../components/form/ProgressBar';
import { useFileUpload } from '../hooks/useFileUpload';

const schema = z.object({
    fontName: z.string().nonempty("Font name is required"),
    fontPreview: z.string().nonempty("Font preview is required"),
});

const Upload = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
        trigger,
        clearErrors,
    } = useForm({
        resolver: zodResolver(schema),
    });

    const { progress, error, handleFileUpload, setError } = useFileUpload(reset);

    const fontName = watch("fontName");
    const fontPreview = watch("fontPreview");

    const onSubmit = (data) => {
        const fileInput = document.getElementById("fileInput");
        if (fileInput.files.length > 0) {
            handleFileUpload(fileInput.files, data.fontName, data.fontPreview);
        } else {
            setError("Please select a file to upload.");
        }
    };

    const handleFileSelect = async (e) => {
        if (fontName && fontPreview) {
            handleFileUpload(e.target.files, fontName, fontPreview);
        } else {
            const isValid = await trigger();
        }
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        if (fontName && fontPreview) {
            handleFileUpload(e.dataTransfer.files, fontName, fontPreview);
        } else {
            const isValid = await trigger();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
                label="Font Name"
                register={register}
                name="fontName"
                errors={errors}
                placeholder="Enter font name"
                onFocus={() => clearErrors("fontName")}
            />

            <FormInput
                label="Font Preview"
                register={register}
                name="fontPreview"
                errors={errors}
                placeholder="Enter font preview"
                onFocus={() => clearErrors("fontPreview")}
            />

            <UploadBox
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileInput").click()}
            />

            <input
                id="fileInput"
                type="file"
                accept=".ttf"
                multiple
                style={{ display: "none" }}
                onChange={handleFileSelect}
            />

            <div id="upload-progress" className="mt-4 space-y-2">
                {Object.keys(progress).map((fileName) => (
                    <ProgressBar
                        key={fileName}
                        fileName={fileName}
                        percentage={progress[fileName]}
                    />
                ))}
            </div>

            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};

export default Upload;