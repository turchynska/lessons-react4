// import { useState } from "react";
import { useToggle } from "../hooks/useToggle";
import Modal from "../Modal/Modal"

const ComponentA = () => {
    const { isOpen, open, close } = useToggle();

    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);

    return(
        <>
        <button onClick={open}>Open Modal</button>
        <Modal isOpen={isOpen} onclose={close}/>
        </>
    )
}
export default ComponentA