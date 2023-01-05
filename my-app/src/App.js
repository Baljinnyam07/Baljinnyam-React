import './styles/bootstrap.css'
import './styles/style.css'
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import HeadingTable from './components/HeadingTable';
import Select from 'react-select';
import DynamicModal from './components/utils/DynamicModal';
import { useState } from 'react';
import PostCreate from './components/Blogs/PostCreate';


function App() {
  
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
    
    <Navbar />
    <div className='container-sm body-container'>
      <Select className="mt-3" value={"Asdas"} options={options}/>
      <Heading title = 'Blog posts' handleShow={handleShow}/>
      <HeadingTable/>
      <DynamicModal show={show} handleClose={handleClose} title= 'Create post' content={<PostCreate/>}/>
    </div>
  </>
  )
}

export default App;
