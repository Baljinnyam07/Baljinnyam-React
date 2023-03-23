import './styles/bootstrap.css'
import './styles/style.css'
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Categories from './pages/Categories';
import MenuPositions from './pages/MenuPositions';
import Menus from './pages/Menus';
import axios from 'axios';
import { ModalProvider } from './contexts/ModalContext';
import Accordion from 'react-bootstrap/Accordion';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import Openai from './pages/Openai';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import SigninError from './pages/SigninError';
import SigninSuccess from './pages/SigninSuccess';



function App() {
  const [menuShow, setMenuShow] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/menus')
    .then((res)=>{
      setMenus(res.data)
    })
  },[])


  const [me, setMe] = useState(undefined)
  

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
        <Route path="*" element={<SigninError/>}/>
      </Routes>
      </>
    );
  }

  return (
    <ModalProvider>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && "show"}`}>
          <Accordion  defaultActiveKey="0">
            
             
                  
          {menus.map((menu) => {
            return (<>
            <Accordion.Item  eventKey={menu.id}>
            
               <AccordionHeader className='AccordionHeader'>
              <li key={menu.id}>
                <Link to={menu.link}>{menu.name}</Link>
              </li>
              </AccordionHeader>
              <AccordionBody>
                  hi
                </AccordionBody>
            </Accordion.Item>
            </>
            );
          })}
                {/* <li><Link to={'/'}>Home</Link></li> */}
              
              <AccordionBody>
                  hi
                </AccordionBody>
            
          </Accordion>
          <ul>
        
          </ul>
        </div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu-positions" element={<MenuPositions />} />
            <Route path="/menu-positions/:id" element={<Menus />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/generate" element={<Openai/>}/>
            {/* <Route path="/signout" element={<Signout setMe={setMe} />} /> */}
          </Routes>
        </div>
      </div>
    </ModalProvider>
  )
}

export default App;
