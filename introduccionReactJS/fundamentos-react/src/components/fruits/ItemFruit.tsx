const ItemFruit = ({index, fruit}: any) => {
    return (
        <li key={index}>{index} - {fruit}</li>
    );
}

export default ItemFruit;