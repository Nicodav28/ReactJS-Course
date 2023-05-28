//  Los Hooks son funciones integradas de React EJ: useState para manejo de estados en tiempo real
import { useRef, useState } from "react";

const NonControlledForm = () => {
    const form = useRef(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault();

        const data = new FormData(form.current);
        // ==> ...data.entries() <== Spread Operator EJ: ...elemento.propiedad(), convierte lo que este dentro de data.entries en un elemento iterable
        const {title, description, state} = Object.fromEntries([...data.entries()]);// ==> Object.fromEntries() <== Convierte arrays de tipo clave valor a objetos
        
        // Validar los datos
        if (!title.trim() || !description.trim() || !state.trim()) {
            setError('Todos los campos deben ser diligenciados');
        } else {
            setError('Todo muy bien');
        }
    }
    
    return (
        <form onSubmit={handleSubmit} ref={form}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Ingrese ToDo" name="title" defaultValue='ToDo01'/>
            </div>
            <div className="mb-3">
                <textarea className="form-control mb-2" rows="3" name="description" placeholder="Ingrese Descripción" defaultValue='ToDo Desc'></textarea>
            </div>
            <div className="mb-3">
                <select className="form-select mb-2" name="state" defaultValue="Completado">
                    <option>Seleccione</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Procesar</button>
            {error !== '' && error}
        </form>
    );
};

export default NonControlledForm;
