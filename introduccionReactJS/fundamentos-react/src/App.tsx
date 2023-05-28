//! NO ES BUENA PRACTICA DECLARAR VARIOS COMPONENTES EN UN SOLO COMPONENTE EJ: ARCHIVO ACTUAL. Lo ideal es manejar un componente por archivo

//* Fragment para creacion de contenedores que encapsulan 1 o varios elementos se puede dar uso a Fragment dejando etiquetas vacias EJ: <>Content</>
//* o tambien importandolo EJ: import { Fragment } from 'react'; o import React from 'react'; para su llamado con importación nombrada EJ: <Fragment></Fragment>
//* o para su llamado con importacion por defecto EJ: <React.Fragment></React.Fragment>

import imagenUno from './assets/images/img.jpg';// Vite permite importar imagenes de la siguiente manera:
import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ListFruits from './components/fruits/ListFruits';
import ButtonState from './components/ButtonState';

//Componente Principal
export const App = () => {//* => Exportación Nombrada <== Permite exportar multiples elementos.
    //* Para realizar una interpolacion de elementos de JS o de variables dentro de elementos JSX(html) se usan llaves EJ: <h1 className={classTitle}>{title}</h1>
    const title = "Mi titulo desde una constante de React";
    const classTitle = "text-center";
    const user = true;
    const fruits = ["🍎","🍌","🍐"];

    //* Operadores ternarios en JSX
    // {user ? <OnlineText /> : <OfflineText />}
    //* Operadores ternarios sin else en JSX
    // {user && <OnlineText />}
    return (
        <>  
            <ButtonState/>
            <h1 className={classTitle}>{title}</h1>
            <img src={imagenUno} alt={`Titulo ${title}`} />
            <MyButton text="Boton 1" className="red"/>
            <MyButton text="Boton 2" className="red"/>
            <MyButton text="Boton 3" className="red"/>
            <WelcomeText user={user} />
            <ListFruits fruits={fruits}/>
        </>
    );
}

//export default App; //* => Exportacion por defecto <== Permite exportar solo 1 elemento.