import React from "react";
import CheckBox from "../../CheckBox/CheckBox";

const Item = ({ title, id, completed, OnCheckTodo }) => {
    return (
        <li
            className={"flex justify-between "}
            id={id}
        >
            <CheckBox
                id={id}
                completed={completed}
                OnCheckTodo={OnCheckTodo}
            />
            <span className={completed ? "line-through" : ""}>{title}</span>

            <button
                className="p-1 bg-blue-200 border-2 border-blue-500 text-blue-500 
rounded hover:bg-blue-500 hover:text-white active:text-red-500"
                id={`remove-${id}`}
            >
                Remove
            </button>
        </li>
    );
};

export default Item;
