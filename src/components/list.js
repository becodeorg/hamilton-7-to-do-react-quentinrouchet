import { useRef, useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid";
import "../sass/components/list.scss";

const LSKEY = "MyTodoApp";

function Checkbox() {
    // State
    const [isActive, setIsActive] = useState(false);

    // Comportement-
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
    const [todos, setTodos] = useState([]);

    const inputRef = useRef();

    // comportements
    const handleSubmit = (event) => {
        event.preventDefault()

        // State copy
        const todosCopy = [...todos];

        const task = inputRef.current.value;
        todosCopy.push({id: uuidv4(), task: task});

        // Push new element into the copy
        setTodos(todosCopy)
    };


    useEffect(() => {
        if (todos.length > 0) localStorage.setItem(LSKEY, JSON.stringify(todos));
      }, [todos]); // <<- look here
    
      useEffect(() => {
        if (localStorage.getItem(LSKEY)) {
          const newList = JSON.parse(localStorage.getItem(LSKEY));
          setTodos(newList);
        }
      }, []);

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
                        <li key={todo.id}> 
                            <Checkbox /><span className="taskHere">{todo.task}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}