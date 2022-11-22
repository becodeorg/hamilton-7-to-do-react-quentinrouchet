import { useRef, useState } from "react";
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

export default function TodoList() {
    // state
    const initialTodos = ["My first todo", "My second todo"];
    const [todos, setTodos] = useState(initialTodos);

    const inputRef = useRef();

    // comportements
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputRef.current.value);

        // State copy
        const todosCopy = [...todos];
        const task = inputRef.current.value;
        todosCopy.push(task);

        // Push new element into the copy
        setTodos(todosCopy)
    };
    
    // render
    return (
        <>
            <form className="add-todo" action="submit" onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" className="add-task" placeholder="Type a new todo"></input>
                <button>Add Todo</button>
            </form>

            <div className="section-li">
                <h2>Todos</h2>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo}> 
                            <Checkbox /><span className="taskHere">{todo}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}