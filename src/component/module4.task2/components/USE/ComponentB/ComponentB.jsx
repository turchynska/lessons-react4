
import { useToggle } from "../hooks/useToggle";
import Sidebar from "../Sidebar/Sidebar";

const ComponentB = () => {
    const {isOpen, open ,close } = useToggle();

    // const openSidebar = () => setIsSidebarOpen(true);
    // const closeSidebar = () =>setIsSidebarOpen(false);

    return(
        <>
        <button onClick={open}>Open sidebar</button>
        <Sidebar isOpen={isOpen} onClose={close}/>
        </>
    )
}
export default ComponentB