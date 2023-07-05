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

    handleCRemoveTodo = (todoId) => {
        const { todos } = this.state;
        console.log(todoId);
        const updatedTodos = todos.filter(({ id }) => id !== todoId);

        this.setState({ todos: updatedTodos });
    };
    isEmptyTodo = () => this.state.todos.length === 0;

    render = () => (
        <TodosComponent
            OnAddTodo={this.hadleAddTodo}
            OnEnterTodo={this.handleChangeEnterTodo}
            OnRemoveTodo={this.handleCRemoveTodo}
            isEmptyTodo={this.isEmptyTodo()}
            todos={this.state.todos}
            {...this.state}
            /*  enterTodo={this.state.enterTodo}
            
            */
        />
    );
}

export default Todos;
