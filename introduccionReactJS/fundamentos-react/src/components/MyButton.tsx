//Componentes Hijos ==>

const MyButton = ({ text, className }: any) => {//Esto es un componente en React -- Los props de my button se estan recibiendo como destructuring objects, por lo tanto se accede
    //directamente a la propiedad del objeto props con el uso de llaves y el nombre de la propiedad EJ: { text, className }
    //* El nombre de los componentes siempre deben comenzar con mayuscula. 
    //* Para llamar este componente dentro del componente principal se hace por medio de una etiqueta EJ: <MyButton/> o <MyButton></MyButton>
    const onClickButton = (title: any) => console.log(title);
    return (
        <button className={className} onClick={() => onClickButton(text)}>{text}</button>
    );
};

export default MyButton;