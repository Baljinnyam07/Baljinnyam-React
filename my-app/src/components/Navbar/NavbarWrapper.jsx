export default function NavbarWrapper({children}){
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">{children}</div>
        </nav>
    );
}