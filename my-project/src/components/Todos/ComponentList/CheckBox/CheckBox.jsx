import { Checkbox } from "@material-tailwind/react";

export default function CheckBox({ OnCheckTodo }) {
    return (
        <Checkbox
            onClick={(e) => {
                const [_, id] = e.target.id;
                OnCheckTodo(id);
            }}
        />
    );
}
