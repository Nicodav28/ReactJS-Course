import { useState } from "react";

const Cat = () => {
    
    const [cat, setCat] = useState({
        name: 'Orejon',
        yo: 3
    });
    //spread operator hace una copia de todo lo que tenga el elemento
    const handleClick = () => {
        setCat({...cat, yo: cat.yo + 1})//Traduce: Saque una copia de todo lo que tiene cat y sobre escriba la propiedad yo por el nuevo valor
    }
    return (
        <>
            <h2>{cat.name} - {cat.yo}</h2>
            <button onClick={handleClick}>update Years Old</button>
        </>
    );
}

export default Cat;