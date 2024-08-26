const Modal = ({ isOpen, onClose }) => {
    return isOpen ? (
        <div className="modal">
            <button onClick={onClose}>Close Modal</button>
            <p>This is a modal window!</p>
        </div>
    ) : null;
};
export default Modal