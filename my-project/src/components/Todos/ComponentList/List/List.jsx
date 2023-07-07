import React from "react";

import Item from "./Item/Item";

const List = ({ OnRemoveTodo, OnCheckTodo, todos }) => {
    const onClick = (e) => {
        if (e.target.id.indexOf("remove") !== -1) {
            const [_, id] = e.target.id.split("-");
            OnRemoveTodo(id);
        }
    };
    return (
        <ul
            className="mt-3"
            onClick={onClick}
        >
            {todos.map(({ id, text }) => {
                return (
                    <Item
                        id={id}
                        key={id}
                        text={text}
                        OnCheckTodo={OnCheckTodo}
                    />
                );
            })}
        </ul>
    );
};

export default List;
