import React from "react";

const MainInput = ({ OnEnterTodo, enterTodo }) => {
    return (
        <input
            type="text"
            placeholder="Enter new todo"
            className="p-1 bg-blue-200 border-2 border-blue-500 text-blue-500 rounded mr-2"
            value={enterTodo}
            onChange={OnEnterTodo}
        />
    );
};

export default MainInput;
