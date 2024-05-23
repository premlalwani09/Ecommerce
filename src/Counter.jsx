import { useState } from "react"

function Counter(){

    const [counter,setcounter] = useState(0);

    function handleModification(props){
        if(props === 'inc'){
            if (counter < 10) {
                setcounter(counter+1);    
            }
        }
        else{
            if (counter > 0) {
                setcounter(counter-1);
            }
        } 
    }

    return(
        <>
            <button onClick={() => handleModification('inc')}>Increment</button>
            <p>{counter}</p>
            <button onClick={() => handleModification('dec')}>Decrement</button>
        </>
    )
}

export default Counter;