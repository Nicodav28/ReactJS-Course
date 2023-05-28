const Todo = ({ todo, deleteTodo, updateTodo}) => {
    const { id, title, description, state, priority} = todo;
    let htmlPriority;
    let htmlState;

    if (priority === true) {
        htmlPriority = '<span class="badge rounded-pill bg-danger">Has Priority</span>';
    } else {
        htmlPriority = '<span class="badge rounded-pill bg-primary">No Priority</span>';
    }

    if (state === true) {
        htmlState = '<span class="badge rounded-pill bg-success">Done</span>';
    } else {
        htmlState = '<span class="badge rounded-pill bg-warning text-dark">Not Done</span>';
    }
    return (
        <div className="col-md-3 mt-5">
            <div className="card">
                <div className="card-header row">
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                    <div className="col-lg-4" dangerouslySetInnerHTML={{__html: htmlPriority}}></div>
                    <div className="col-lg-4" dangerouslySetInnerHTML={{__html: htmlState}}></div>
                </div>
                <div className="card-body">
                    <p className={`${state && 'text-decoration-line-through'}`}>{description}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(id)}>Eliminar</button>
                        {!state && (<button className="btn btn-sm btn-success" onClick={() => updateTodo(id)}>Actualizar</button>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;