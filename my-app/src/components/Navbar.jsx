import { useState } from "react"; 
export default function Navbar(){

    const [showDropdown, setShowDropdown] = useState(false);
    
    const toggleDropdown = () =>{
        setShowDropdown(!showDropdown)
    };
    return(<><nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Admin</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Нүүр</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Мэдээ</a>
        </li>
      </ul>
    </div>
    <div>
            <div className="dropdown text-end">
              <a onClick={toggleDropdown} href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
              </a>
              <ul className={`dropdown-menu text-small end-0 ${showDropdown && 'show'}`}>
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
  </div>
</nav></>)
}