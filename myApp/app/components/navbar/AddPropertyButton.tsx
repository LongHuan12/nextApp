'use client';
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import loginModal from "@/app/components/modals/LoginModal";

interface AddPropertyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
                                                             }) => {
    const loginModal = useLoginModal();
    const addPropertyModal = useAddPropertyModal();

    const rentYourHome = () => {
        if (userId) {
            addPropertyModal.open();
        } else {
            loginModal.open();
        }
    }
    return (
        <div
            onClick={rentYourHome}
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            Rent your home
        </div>
    )
}
export default AddPropertyButton;