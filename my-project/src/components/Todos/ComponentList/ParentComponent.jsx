import React from "react";

class ParentComponent extends React.Component {
    handleDelete = () => {
        const { id, onDelete } = this.props; // Получаем ID и функцию onDelete из входных параметров
        onDelete(id); // Вызываем функцию onDelete и передаем ей ID родителя
    };

    render() {
        const { id } = this.props; // Получаем ID из входных параметров
        return (
            <div>
                <div>Родитель с ID: {id}</div>
                <button onClick={this.handleDelete}>Удалить родителя</button>
            </div>
        );
    }
}

class ParentList extends React.Component {
    state = {
        parents: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };

    handleParentDelete = (parentId) => {
        this.setState((prevState) => ({
            parents: prevState.parents.filter(
                (parent) => parent.id !== parentId
            ),
        }));
    };

    render() {
        const { parents } = this.state;
        return (
            <div>
                {parents.map((parent) => (
                    <ParentComponent
                        key={parent.id}
                        id={parent.id}
                        onDelete={this.handleParentDelete}
                    />
                ))}
            </div>
        );
    }
}

export default ParentList;
