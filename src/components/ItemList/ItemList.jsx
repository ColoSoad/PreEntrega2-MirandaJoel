import { Item } from '../Item/Item';
import '../ItemList/ItemList.css';

export const ItemList = ({ items }) => {
    return (
        <div className="d-flex itemsList">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};
