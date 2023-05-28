//  Los Hooks son funciones integradas de React EJ: useState para manejo de estados en tiempo real
import { useState } from "react";

const ControlledForm = () => {
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [state, setState] = useState('');
    let errMessage;
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: '',
        priority: true
    });

    const [message, setMessage] = useState("");

    const { title, description, state, priority } = todo;

    const handleSubmit = (e) => { 
        e.preventDefault();
    }

    const handleOnChange = (e) => {
        const { name, type, checked, value } = e.target;
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        });

        if (!title.trim() || !description.trim()|| !state.trim()) {
            setMessage('Please fill all the fields');
        } else {
            setMessage('All Good');

        }
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
                <label className="form-check-label" htmlFor="check1">Check me out</label>
            </div>
            <div className="mb-3">
                <select className="form-select mb-2" name="state" value={state} onChange={handleOnChange}>
                    <option>Seleccione</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Procesar</button>
            {message}
        </form>
    );
};

export default ControlledForm;
