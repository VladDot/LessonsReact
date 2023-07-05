import React from "react";

const MainButton = ({ OnAddTodo }) => {
    return (
        <button
            className="p-1 bg-blue-200 border-2 border-blue-500 text-blue-500 
        rounded hover:bg-blue-500 hover:text-white active:text-red-500"
            onClick={OnAddTodo}
        >
            Add new todo
        </button>
    );
};

export default MainButton;
