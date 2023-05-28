import ItemFruit from "./ItemFruit";

const ListFruits = ({fruits}: any) => {
    return (
        <ul>
            {
                fruits.map((fruit: String, index: number) => (
                    <ItemFruit index={index} fruit={fruit} />//Los valores que se pasen dentro de la etiqueta del componente son props
                ))
            }
        </ul>
    );
}

export default ListFruits;