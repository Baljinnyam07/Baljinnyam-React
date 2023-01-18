import './styles/bootstrap.css'
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Signin from './pages/Signin';
import SignInError from './pages/SigninError';
import Signup from './pages/Signup';
import SigninSuccess from './pages/SigninSuccess';
import SignOut from './pages/SignOut';
import Categories from './pages/Categories';
import { ToastContainer } from 'react-toastify';



function App() {
  const [me, setMe] = useState(undefined)
  const [menuShow, setMenuShow] = useState(false);
  

  useEffect(()=>{
    const myData = localStorage.getItem('me');
    if(myData !== "undefined"){
      setMe(JSON.parse(myData));
    }
  }, []);
 
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
            <Route path='/categories' element={<Categories/>} />
            <Route path='/articles' element={<Articles menuShow={menuShow} />} />
          </Routes>
        </div>
      </div>
      
      <ToastContainer/>
      
      
    </>
  )
}

export default App;
