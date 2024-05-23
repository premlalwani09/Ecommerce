import { useState } from "react"


function TodoList(){

    const [inputValue, setInputValue] = useState('');
    const [tasks ,setTasks] = useState([]);

    function handleSubmit(){
        setTasks([... tasks, inputValue]);
    }


    return(
        <>
            <div id="todo">
                <input type='text' placeholder="" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button onClick={handleSubmit}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task , index) => (
                        <li key={index}>{task}</li>
                ))}
            </ul>
        </>
    )
}


export default TodoList;

  
    