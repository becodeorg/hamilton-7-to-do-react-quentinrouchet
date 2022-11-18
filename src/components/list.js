import { useState } from "react";
import "../sass/components/list.scss";

function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = event => {
      if (event.target.checked) {
        console.log('✅ Checkbox is checked');
      } else {
        console.log('⛔️ Checkbox is NOT checked');
      }
      setIsChecked(current => !current);
    };

    return(
        <input type="checkbox" value={isChecked} onChange={handleChange}></input>
    );
}

export default function List() {

    //state
    const [todos, setTodos] = useState([
        {id: 1, task:"Salut React"},
        {id: 2, task:"My second todo"}
    ]);

    //comportement

    //render
    return (
        <div className="section-li">
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => {
                    return <li>
                        <Checkbox />{todo.task}
                    </li>
                })}
            </ul>
        </div>
    );
}