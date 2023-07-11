export default function CheckBox({ id, completed, OnCheckTodo }) {
    console.log(completed);
    return (
        <input
            checked={completed}
            type="checkbox"
            onChange={() => OnCheckTodo(id, !completed)}
        />
    );
}
