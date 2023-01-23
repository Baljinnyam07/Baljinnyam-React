import Home from "./pages/Home";
import Header from './components/Header'
import Text from "./components/Text";
import { Route, Routes } from "react-router-dom";
import ChatScreen from "./components/ChatScreen";
// import Card from "./components/Card";
// import ChatScreen from "./components/ChatScreen";
// import Counter from "./components/Counter";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
    
        <Route path="/text" element={<Text/>} />

        <Route path='/ChatScreen' element={<ChatScreen/>}/>
  
      </Routes>
      
    </>
  )
}

export default App;
