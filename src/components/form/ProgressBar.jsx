const ProgressBar = ({ fileName, percentage }) => (
    <div key={fileName}>
        <p className="text-gray-700">{fileName}</p>
        <div className="relative h-4 w-full bg-gray-200 rounded">
            <div
                className="absolute h-full bg-blue-500 rounded text-sm flex flex-col items-center"
                style={{ width: `${percentage}%` }}
            >
                <span className="mt-[-2px] font-normal"> {Math.round(percentage)}% </span>
            </div>
        </div>
    </div>
);

export default ProgressBar;
