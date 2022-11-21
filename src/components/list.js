import { useState } from "react";
import "../sass/components/list.scss";

function Checkbox() {
    // State
    const [isActive, setIsActive] = useState(false);

    // Comportement
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
      };
    
    // Render
    return(
        <input type="checkbox" className={isActive ? 'checked' : 'not-checked'} onClick={handleClick}></input>
    );
}

export default function List() {

    //state
    const [todos, setTodos] = useState([
        {id: 1, task:"Salut React"},
        {id: 2, task:"My second todo"},
        {id: 3, task:"Salut React, je suis sur que t'es un vrai bro. Attends, je dois encore agrandir le texte. Et la c'est tjr pas finis mais on y est presque."},
        {id: 4, task:"My second todo"},
        {id: 5, task:"Salut React"},
        {id: 6, task:"My second todo"}
    ]);

    //comportement

    //render
    return (
        <div className="section-li">
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id}> 
                        <Checkbox /><span className="taskHere">{todo.task}</span>
                    </li>
                })}
            </ul>
        </div>
    );
}