import React from "react";

import Item from "./Item/Item";

const List = ({ OnRemoveTodo, todos, id }) => {
    return (
        <ul
            className="mt-3"
            onClick={(e) => {
                if (e.target.id === "remove") {
                    OnRemoveTodo(id);
                    console.log(e.target.id);
                    console.log(todos.Item);
                }
            }}
        >
            {todos.map(({ id, text }) => (
                <Item
                    id={id}
                    key={id}
                    text={text}
                />
            ))}
        </ul>
    );
};

export default List;
