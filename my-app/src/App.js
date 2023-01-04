
import './styles/bootstrap.css'
import './styles/style.css'
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import HeadingTable from './components/HeadingTable';
import Select from 'react-select';




function App() {
  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
  return ( 
    <>
    
      <Navbar />
      <div className='container-sm body-container'>
      <Select className="mt-3" value={"Asdas"} options={options}/>
    <Heading title = 'Blog posts'/>
    <HeadingTable/>
    </div>
    
  </>
  )
}

export default App;
