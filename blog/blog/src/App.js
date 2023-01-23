import Home from "./pages/Home";
import Header from './components/Header'
import { Route, Routes } from "react-router-dom";
import ChatScreen from "./components/ChatScreen";
import Articles from "./components/Articles";
;
// import Card from "./components/Card";
// import ChatScreen from "./components/ChatScreen";
// import Counter from "./components/Counter";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
    
        <Route path="/articles/:id" element={<Articles/>} />

        <Route path='/ChatScreen' element={<ChatScreen/>}/>
  
      </Routes>
      
    </>
  )
}

export default App;
