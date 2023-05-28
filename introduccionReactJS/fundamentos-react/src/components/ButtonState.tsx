import { useState } from "react";

const ButtonState = () => {

    const [count, setCount] = useState(1); //Uso de destructuring objects

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>Button State: { count }</button>
    );
}

export default ButtonState;