import './App.css';
import Box from "@mui/material/Box";
import { Layout } from './components/Layout';
import { CategoriesScreen, HomeScreen } from './pages';
import { Route, Routes} from 'react-router'
import { blueGrey } from '@mui/material/colors';


const bgColor = blueGrey[50];
const wrapperStyle={
  p:5,
  backgroundColor:bgColor,
  width: 'calc(100vw - 65px)',
  minHeight:"calc(100vh - 65px)",
  boxSizing:'border-box'
}


function App() {

  return <>
    <Layout>
      <Box sx={wrapperStyle}>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/categories' element={<CategoriesScreen/>}/>
        </Routes>
      </Box>
    </Layout>
  </>;
}

export default App;
