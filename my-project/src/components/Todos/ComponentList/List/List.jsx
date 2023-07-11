import React from "react";

import Item from "./Item/Item";

const List = ({ OnRemoveTodo, todos, OnCheckTodo }) => {
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
            {todos.map((todo) => {
                return (
                    <Item
                        key={todo.id}
                        {...todo}
                        OnCheckTodo={OnCheckTodo}
                    />
                );
            })}
        </ul>
    );
};

export default List;
