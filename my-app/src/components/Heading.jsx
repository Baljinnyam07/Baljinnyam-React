import {SlPlus} from 'react-icons/sl';

export default function Heading({title}){
    return (
      
        <div className='d-flex justify-content-between align-items-center'>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <button className='btn btn-sm btn-primary'>Create <SlPlus/></button>
        </div>
      </div>
      
        
    )
}