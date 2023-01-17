import './styles/bootstrap.css'
import Navbar from './components/Navbar';
import Select from 'react-select';
import DynamicModal from './components/utils/DynamicModal';
import { useEffect, useState } from 'react';
import PostCreate from './components/Blogs/PostCreate';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Signin from './pages/Signin';
import SignInError from './pages/SigninError';
import Signup from './pages/Signup';
import SigninSuccess from './pages/SigninSuccess';
import SignOut from './pages/SignOut';



function App() {
  const [me, setMe] = useState(undefined)
  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  
  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    const myData = localStorage.getItem('me');
    if(myData !== "undefined"){
      setMe(JSON.parse(myData));
    }
  }, []);
  const navigate = useNavigate()
 
  if(!me){
    return (
      <>
        <Routes>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signin/success" element={<SigninSuccess setMe={setMe}/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<SignInError/>}/>
      </Routes>
      </>
    );
  }

  return ( 

    <>
    
    <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && 'show'}`}>Test</div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/signout" element={<SignOut setMe={setMe}/>} />
            <Route path='/articles' element={<Articles menuShow={menuShow} handleShow={handleShow}/>} />
          </Routes>
        </div>
      </div>
      
      <Select className="mt-3" value={"Asdas"} options={options}/>
      <DynamicModal show={show} handleClose={handleClose} title= 'Create post' content={<PostCreate/>}/>
    </>
  )
}

export default App;
