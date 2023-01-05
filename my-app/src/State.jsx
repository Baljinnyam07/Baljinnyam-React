import { useState } from "react"


    const styles ={
        wrapper:{
            minHeight : '100vh',
            display: 'flex',
            maxWidth: '100%',
            justifyContent: 'center',
            alignItems : 'center',
            flexDirection : 'column',
            
        }
    }
export default function State(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () =>{
        const newList = [...todos, input];
        setTodos(newList);
        
    };
    const removeTodo = (e) =>{
        // return e.target.id < todos.length

        if(e.target.id == todos-length-1)
        console.log(e.target.id)
        console.log(todos.length-1)
    }
    return (

        <div style={styles.wrapper}>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) =>(
                     <li id={index} onClick={removeTodo} key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    ); 
}