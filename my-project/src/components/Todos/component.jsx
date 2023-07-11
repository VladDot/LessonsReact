import React from "react";
import MainButton from "./ComponentList/MainButton";
import MainInput from "./ComponentList/MainInput";
import List from "./ComponentList/List/List";
import EmptyTodo from "./ComponentList/List/EmptyTodo/component";

/* import List from "./ComponentList/List"; */

const TodosComponent = ({
    enterTodo,
    OnEnterTodo,
    OnAddTodo,
    OnRemoveTodo,
    OnCheckTodo,
    isEmptyTodo,

    todos,
}) => {
    return (
        <div className="w-2/4 m-auto ">
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
                <EmptyTodo />
            ) : (
                <List
                    todos={todos}
                    OnRemoveTodo={OnRemoveTodo}
                    OnCheckTodo={OnCheckTodo}
                />
            )}
        </div>
    );
};

export default TodosComponent;
