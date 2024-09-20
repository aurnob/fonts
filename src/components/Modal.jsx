import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div ref={modalRef} className="relative bg-white p-6 rounded shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl font-bold text-red-600"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;