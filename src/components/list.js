function Checkbox() {
    return(
        <input type="checkbox"></input>
    );
}

export default function List() {
    return (
        <ul>
            <li><Checkbox /> Learn React</li>
            <li><Checkbox /> Be Awesome!</li>
        </ul>
    );
}

