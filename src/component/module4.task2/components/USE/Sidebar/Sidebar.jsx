const Sidebar = ({ isOpen, onClose}) =>{
    return isOpen ? (
        <div className="sidebar">
<button onClick={onClose}>Close Sidebar</button>
<p>This is a sidebar</p>
        </div>
    ) : null;
}
export default Sidebar