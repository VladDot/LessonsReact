import React from "react";

import TodosComponent from "./component";

class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enterTodo: "",
            todos: [],
        };
    }

    handleChangeEnterTodo = (e) => {
        this.setState({ enterTodo: e.target.value });
    };

    hadleAddTodo = (e) => {
        const { enterTodo, todos } = this.state;
        if (enterTodo !== "") {
            const newTodo = {
                id: Math.round(Math.random() * 1000),
                text: enterTodo,
                checked: false,
            };
            this.setState({ todos: [...todos, newTodo], enterTodo: "" });
        }
    };

    handleRemoveTodo = (todoId) => {
        console.log(todoId);
        const { todos } = this.state;

        const updatedTodos = todos.filter((todo) => todo.id != todoId);
        console.log(updatedTodos);
        this.setState({ todos: updatedTodos });
    };

    handleCheckTodo = (todoId, props) => {
        const { todos } = this.state;
        /*        const className = "line-through"; */
        const checkTodo = todos.filter((todo) => todo.id == todoId);
        console.log(checkTodo.className);
    };
    isEmptyTodo = () => this.state.todos.length === 0;

    render = () => (
        <TodosComponent
            OnAddTodo={this.hadleAddTodo}
            OnEnterTodo={this.handleChangeEnterTodo}
            OnRemoveTodo={this.handleRemoveTodo}
            isEmptyTodo={this.isEmptyTodo()}
            OnCheckTodo={this.handleCheckTodo}
            {...this.state}

            /*  enterTodo={this.state.enterTodo}
            todos={this.state.todos}
            */
        />
    );
}

export default Todos;
