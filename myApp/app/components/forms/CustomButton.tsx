interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`w-full py-4 px-4 h-[54px] bg-blue-500 hover:bg-blue-700 text-white rounded-xl transition cursor-pointer ${className}`}
        >
            {label}
        </button>
    )
}

export default CustomButton;
