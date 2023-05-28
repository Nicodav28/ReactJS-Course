import { useState, useEffect } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

const initialStateTodo = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

    const [todos, setTodos] = useState(initialStateTodo);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const deleteTodo = (id) => {
        const newArray = todos.filter(todo => todo.id !== id);
        setTodos(newArray);
    }

    const updateTodo = (id) => {
        const newArray = todos.map(todo => {
            if (todo.id == id) {
                todo.state = !todo.state;
            }

            return todo;
        });
        setTodos(newArray);
    }

    const orderTodo = (arrayTodos) => {
        return arrayTodos.sort((a, b) => {
            if (a.priority === b.priority) return 0;
            if (a.priority) return -1;
            if (!a.priority) return 1;
        });
    }
    return (
        <>
            <div className="container mb-2">
                <h1 className="text-center my-5">Todos Form</h1>
                <TodoForm addTodo={addTodo}/>
                <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            </div>
        </>
    );
}

export default App;