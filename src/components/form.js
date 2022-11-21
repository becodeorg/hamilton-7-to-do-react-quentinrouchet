import "../sass/components/input.scss"

function Button() {
    return (
        <button onClick={clickHandler}>Add Todo</button>
    )
}

function Input() {
    return (
        <input className="add-task" placeholder="Type a new todo"></input>
    )
}

export default function Form() {
    return (
        <form className="add-todo">
            <Input />
            <Button />
        </form>
    )
}

