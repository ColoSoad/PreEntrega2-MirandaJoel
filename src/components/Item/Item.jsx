import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Item/Item.css';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    let id = parseInt(item.id);
    return (
        <div className="cards d-flex">
            <Card style={{ width: '250px' }}>
                <Card.Img variant="top" src={item.img} alt={item.producto} />
                <Card.Body>
                    <Card.Title>{item.producto}</Card.Title>
                    <Card.Text>{item.detalle}</Card.Text>
                    <hr />
                    <Card.Text>{item.category}</Card.Text>
                    <Link to={`/item/${item.id}`}>
                        <Button variant="primary" className="boton">
                            Ver +
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};
