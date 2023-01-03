
import NavbarDropdown from "./Navbar/NavbarDropdown";
import NavbarMenu from "./Navbar/NavbarMenu";
import NavbarWrapper from "./Navbar/NavbarWrapper";
export default function Navbar(){
    const menuItems = [
        {label: 'Home', link: "#"},
        {label: 'Articles', link: "#"},
        {label: 'Feedback', link: "#"},
        {label: 'Files', link: "#"},
    ]
    const dropdownItems = [
        {label: 'Home', link: "#"},
        {label: 'Inbox', link: "#"},
        {label: 'Settings', link: "#"},
        {label: '---', link: "#"},
        {label: 'Sign out', link: "#"}
    ]
    return(<>
    <NavbarWrapper>
        <NavbarMenu title="Admin" items={menuItems} />
        <NavbarDropdown items = {dropdownItems} img='https://cdn5.vectorstock.com/i/1000x1000/09/49/pixel-art-bunch-grapes-icon-32x32-vector-30730949.jpg' />
    </NavbarWrapper>
    
</>)
}