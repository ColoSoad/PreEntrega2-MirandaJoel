import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/productos.json';
import '../ItemDetailContainer/ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });
        get.then((data) => {
            const findedData = data.find((i) => i.id === parseInt(id));
            setItem(findedData);
        });
    }, [id]);

    if (!item) return null;
    return (
        <div className="detail">
            <h1>{item.producto}</h1>
            <div className="imgYdetalle container-fluid">
                <div className="row">
                    <div className="left col-md-6">
                        <img src={item.img} alt={item.producto} className="col-md-6" />
                    </div>
                    <div className="right col-md-6">
                        <p className="col-md-6 parra">{item.detalle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
