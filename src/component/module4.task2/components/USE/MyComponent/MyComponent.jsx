import { useToggle } from "../hooks/useToggle";
import Modal from "../Modal/Modal"

const myComponent = () => {
    const {isOpen, open, close} = useToggle(true);
    return(
        <>
        <button onClick={open}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={close}/>
        </>
    )
}
export default myComponent