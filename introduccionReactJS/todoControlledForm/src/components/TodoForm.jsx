import { useState } from "react";
import Swal from 'sweetalert2'

const TodoForm = ({addTodo}) => {

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: '',
        priority: true
    });

    const { title, description, state, priority } = todo;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const handleSubmit = (e) => { 
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            return Toast.fire({
                icon: 'error',
                title: 'Oops... There was an error, title and description fields are mandatory!'
            });
        } else {
            addTodo({
                id: Date.now(),
                ...todo,
                state: state === 'Completado'
            });
            Toast.fire({
                icon: 'success',
                title: 'Todo registered succesfully!',
            });
        }
    }

    const handleOnChange = (e) => {
        const { name, type, checked, value } = e.target;
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        });

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Ingrese ToDo" name="title" value={title} onChange={handleOnChange} />
            </div>
            <div className="mb-3">
                <textarea className="form-control mb-2" rows="3" name="description" placeholder="Ingrese Descripción" value={description} onChange={handleOnChange}></textarea>
            </div>
            <div className="mb-2 form-check">
                <input type="checkbox" className="form-check-input" id="check1" name="priority" checked={priority} onChange={handleOnChange}/>
                <label className="form-check-label" htmlFor="check1">Prioritario</label>
            </div>
            <div className="mb-3">
                <select className="form-select mb-2" name="state" value={state} onChange={handleOnChange}>
                    <option>Seleccione</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Todo!</button>
        </form>
    );
};

export default TodoForm;
