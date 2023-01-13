import './styles/bootstrap.css'
// import './styles/style.css'
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import HeadingTable from './components/HeadingTable';
import Select from 'react-select';
import DynamicModal from './components/utils/DynamicModal';
import { useState } from 'react';
import PostCreate from './components/Blogs/PostCreate';
import SecretJutsu from './SecretJutsu';
import Button from 'react-bootstrap/esm/Button';





function App() {

  const [menuShow, setMenuShow] = useState(false);
  
  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return ( 
    <>
    
    <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && 'show'}`}>Test</div>
        <div className="off-menu-sibling">
          <div className="container-sm body-container">
          <Heading title = 'Blog posts' handleShow={handleShow}/>
          <HeadingTable/>
          </div>
        </div>
      </div>
      <Select className="mt-3" value={"Asdas"} options={options}/>
      <DynamicModal show={show} handleClose={handleClose} title= 'Create post' content={<PostCreate/>}/>
    </>
  )
}

export default App;
