import './App.css';
import Box from "@mui/material/Box";
import { Layout } from './components/Layout';
import Button from '@mui/material/Button';
import { useToast } from './hooks';
import { useDialog } from './hooks/useDialog';


function App() {
  const showToast=useToast();
  const showDialog=useDialog();

  return <>
  <Box sx={{background:"rgb(246, 247, 255)"}}>
    <Layout>
      <Box sx={{p:5}}>
        <Button variant="outlined" onClick={()=>{showToast('Heloo', 'success')}}>
            Open success snackbar
        </Button>
      </Box>
      <Box sx={{pt:4, pl:5}}>
        <Button variant="outlined" onClick={()=>{showDialog('', '','')}}>
            Open success Dialog
        </Button>
      </Box>
    </Layout>
  </Box>
  </>;
}

export default App;
