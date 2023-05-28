import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {

    return (
        <div className="mt-5">
            <hr />
            <h2 className="text-center">Activies</h2>
            <div className="col-md-12 row d-flex justify-content-center">{todos.map(todo => (
                <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}{todos.length == 0 && (<li className="list-group-item text-center">No hay todos activos</li>)}</div>
        </div>
    );
}

export default Todos;