'use client';

import CustomButton from "../forms/CustomButton";
import Modal from "./Modals";
import useLoginModal from "@/app/hooks/useLoginModal";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const content = (
        <>

            <form className="space-y-4">
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-blue-500 text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton
                    label="Submit"
                    onClick={() => console.log('Test')}

                    
                ></CustomButton>
            </form>
        </>
    );

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    );
}

export default LoginModal;
