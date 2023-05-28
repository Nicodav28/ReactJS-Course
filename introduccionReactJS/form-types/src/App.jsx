// import NonControlledForm from "./components/NonControlledForm";<NonControlledForm/>

import ControlledForm from "./components/ControlledForm";
// import Cat from "./components/Cat"; <Cat/>

const App = () => {
    return (
        <>
            <div className="container">
                <h1>Formularios</h1>
                <ControlledForm/>
            </div>
        </>
    );
}

export default App;