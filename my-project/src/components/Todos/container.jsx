import React, { useState, useEffect } from "react";

import TodosComponent from "./component";
import useGetData from "../../hooks/useGetData";

const Todos = () => {
    const [enterTodo, setEnterTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const { data, error, loading } = useGetData(
        "https://jsonplaceholder.typicode.com/todos"
    );

    /*  useEffect(() => {
        setTodos(data);
    }, [data]); */

    const handleChangeEnterTodo = (e) => {
        setEnterTodo(e.target.value);
    };

    const hadleAddTodo = () => {
        if (enterTodo !== "") {
            const newTodo = {
                id: Math.round(Math.random() * 1000),
                title: enterTodo,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setEnterTodo("");
        }
    };
    const handleRemoveTodo = (todoId) => {
        console.log(todoId);
        const updatedTodos = todos.filter((todo) => todo.id != todoId);

        setTodos(updatedTodos);
    };

    const handleCheckTodo = (todoId, checked) => {
        console.log(todoId);
        const newTodos = todos.map((todo) => {
            if (todo.id === +todoId) {
                return {
                    ...todo,
                    completed: checked,
                };
            }
            return todo;
        });
        setTodos(newTodos);
        /*console.log(newTodos);*/
    };

    const isEmptyTodo = todos.length === 0;

    if (loading) {
        return "Loading ...";
    }

    return (
        <TodosComponent
            enterTodo={enterTodo}
            OnAddTodo={hadleAddTodo}
            OnEnterTodo={handleChangeEnterTodo}
            OnRemoveTodo={handleRemoveTodo}
            isEmptyTodo={isEmptyTodo}
            OnCheckTodo={handleCheckTodo}
            todos={todos}

            /*  enterTodo={state.enterTodo}
            
            */
        />
    );
};

export default Todos;
