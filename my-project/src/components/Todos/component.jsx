import React from "react";
import MainButton from "./ComponentList/MainButton";
import MainInput from "./ComponentList/MainInput";
import List from "./ComponentList/List/List";
import ParentComponent from "./ComponentList/ParentComponent";

/* import List from "./ComponentList/List"; */

const TodosComponent = ({
    enterTodo,
    OnEnterTodo,
    OnAddTodo,
    OnRemoveTodo,
    isEmptyTodo,
    todos,
}) => {
    return (
        <div className="w-1/4 m-auto ">
            <h1 className="flex items-center  text-center justify-center font-bold text-2xl p-2">
                Todos
            </h1>
            <div className="flex ">
                <MainInput
                    enterTodo={enterTodo}
                    OnEnterTodo={OnEnterTodo}
                />
                <MainButton OnAddTodo={OnAddTodo} />
            </div>
            {isEmptyTodo ? (
                <div className="p-2 text-center font-bold text-2xl">
                    Empty List
                </div>
            ) : (
                <List
                    todos={todos}
                    OnRemoveTodo={OnRemoveTodo}
                />
            )}
            <ParentComponent />
        </div>
    );
};

export default TodosComponent;
