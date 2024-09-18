import UploadIcon from '../icons/UploadIcon';

const UploadBox = ({ onDrop, onClick }) => (
    <div
        className="upload-box border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center cursor-pointer"
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={onClick}
    >
        <div className="p-14">
            <div className="flex flex-col items-center mb-2">
                <UploadIcon />
            </div>
            <p className="text-gray-500"><span className="font-bold">Click to upload</span> or drag and drop<br />Only TTF Files Allowed</p>
        </div>
    </div>
);

export default UploadBox;
