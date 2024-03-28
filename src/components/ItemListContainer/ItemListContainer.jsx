import '../ItemListContainer/ItemListContainer.css';
export const ItemListContainer = (props) => {
    return (
        <div className="contenedor">
            <p>{props.greeting}</p>
        </div>
    );
};
