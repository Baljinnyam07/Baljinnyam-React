import {SlPencil, SlTrash} from 'react-icons/sl';
 const items = [
     {
         title: "How to become peaceful	",
         description: "asdasdas"
     },
     {
         title: "How to become peaceful	",
         description: "asdasdas"
     },
     {
         title: "How to become peaceful	",
         description: "asdasdas"
     },
     {
         title: "How to become peaceful	",
         description: "asdasdas"
     },
     {
         title: "How to become peaceful	",
         description: "asdasdas"
     },
     {
         title: "How to become baljka	",
         description: "asdasdas"
     },
     {
         title: "sedee	",
         description: "asdasdas"
     },
 ]


function TableRow({item, index}){
    function test(index){
        // console.log(

        console.log(items.pop())
    }
return     <tr>
            <th scope='row'>{index}</th>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td style={{whiteSpace:'nowrap'}}>
              <button className='btn btn-sm btn-outline-primary'>Edit <SlPencil/></button>
              <button className='btn btn-sm btn-outline-danger' onClick={()=>test(index)}>Delete <SlTrash/></button>
            </td>
            </tr>
}
export default function HeadingTable (){
    return (
        
        <div>
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th width = '1'>#</th>
              <th>Name</th>
              <th>Description</th>
              <th width="1">Actions</th>
            </tr>
          </thead>
          <tbody>
              {items.map((item, index)=>{
                  return <TableRow item={item} index={index+1}/>
              })}
          </tbody>
        </table>
      </div>
        
        
    )
}