import UploadBox from '../components/form/UploadBox';
import ProgressBar from '../components/form/ProgressBar';
import { useFileUpload } from '../hooks/useFileUpload';

const Upload = () => {
    const { progress, error, handleFileUpload, setError } = useFileUpload(() => {
        document.getElementById("fileInput").value = ""; // Reset file input
    });

    const handleFileSelect = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            handleFileUpload(files);
        } else {
            setError("Please select a file to upload.");
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileUpload(files);
        } else {
            setError("Please drop a file to upload.");
        }
    };

    return (
        <div className="space-y-4">
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
        </div>
    );
};

export default Upload;
