import './styles/bootstrap.css'
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Categories from './pages/Categories';
import { ToastContainer } from 'react-toastify';
import MenuPositions from './pages/MenuPositions';



function App() {
  const [menuShow, setMenuShow] = useState(false);
  // const [me, setMe] = useState(undefined)
  

  // useEffect(()=>{
  //   const myData = localStorage.getItem('me');
  //   if(myData !== "undefined"){
  //     setMe(JSON.parse(myData));
  //   }
  // }, []);
 
  // if(!me){
  //   return (
  //     <>
  //       <Routes>
  //       <Route path="/signin" element={<Signin/>} />
  //       <Route path="/signin/success" element={<SigninSuccess setMe={setMe}/>} />
  //       <Route path="/signup" element={<Signup/>}/>
  //       <Route path="*" element={<SignInError/>}/>
  //     </Routes>
  //     </>
  //   );
  // }

  return ( 

    <>
    
    <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && 'show'}`}>Test</div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/menu-positions' element={<MenuPositions/>} />
            {/* <Route path="/signout" element={<SignOut setMe={setMe}/>} /> */}
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
