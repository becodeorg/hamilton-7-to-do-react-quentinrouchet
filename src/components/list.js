import { useState } from "react";
import "../sass/components/list.scss";

function Checkbox() {
    return(
        <input type="checkbox"></input>
    );
}

// export default function List() {
//     return (
//         <div className="section-li">
//             <h2>Todos</h2>
//             <ul>
//                 <li><Checkbox /> Learn React</li>
//                 <li><Checkbox /> Be Awesome!</li>
//             </ul>
//         </div>
//     );
// }


// export default function List() {
//     const initialTodos = ["Salut mon pote React", "My second todo"];
//     const [todos, setTodos] = useState(initialTodos);
//     return (
//         <div className="section-li">
//             <h2>Todos</h2>
//             <ul>
//                 {todos.map((todo) => (
//                     <li>
//                         <Checkbox /> {todo}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

export default function List() {

    //state
    const [todos, setTodos] = useState([
        {id: 1, nom:"Learn React"}
        {id: 2, nom:"My second todo"}
    ]);

    //render
    return (
        <div className="section-li">
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => {
                    return
                })}
            </ul>
        </div>
    );
}