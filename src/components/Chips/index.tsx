import React from 'react';

type ChipVariant = 'default' | 'primary' | 'success' | 'danger';

interface ChipProps {
    text: string;
    variant?: ChipVariant;
    onClose?: () => void;
}

const Chip: React.FC<ChipProps> = ({ text, variant = 'default', onClose }) => {
    const baseStyles = 'chip py-1 px-2 rounded-full inline-flex justify-center items-center';
    const variantStyles: Record<ChipVariant, string> = {
        default: 'text-gray-700 bg-gray-100 border border-gray-300',
        primary: 'text-blue-700 bg-blue-100 border border-blue-300',
        success: 'text-green-700 bg-green-100 border border-green-300',
        danger: 'text-pink-700 bg-pink-100 border border-pink-300',
    };

    return (
        <div className={`${baseStyles} ${variantStyles[variant]}`}>
            <div className="text-xs font-normal leading-none max-w-full flex-initial">{text}</div>

            {onClose && (
                <button onClick={onClose} className="ml-2 text-white" aria-label="Remove Chip">
                &times;
                </button>
            )}
        </div>
    );
};

export default Chip;
