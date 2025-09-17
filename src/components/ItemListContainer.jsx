import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const mockProducts = [
  { id: 1, title: 'Producto 1', description: 'Descripción del producto 1', category: 'skincare', image: '../images/producto1.webp' },
  { id: 2, title: 'Producto 2', description: 'Descripción del producto 2', category: 'maquillaje', image: '../images/producto2.webp' },
  { id: 3, title: 'Producto 3', description: 'Descripción del producto 3', category: 'cabello', image: '../images/producto3.webp' },
  { id: 4, title: 'Producto 4', description: 'Descripción del producto 4', category: 'skincare', image: '../images/producto4.webp' },
  { id: 5, title: 'Producto 5', description: 'Descripción del producto 5', category: 'maquillaje', image: '../images/producto5.webp' },
  { id: 6, title: 'Producto 6', description: 'Descripción del producto 6', category: 'cabello', image: '../images/producto6.webp' },
];

function ItemListContainer({greeting}) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(mockProducts.filter((p) => p.category === categoryId));
        } else {
          resolve(mockProducts);
        }
      }, 500);
    });

    getProducts.then(setProducts);
  }, [categoryId]);

  return (
    <div className='item-list-container'>
      <h2 className='greeting'>{greeting}</h2>
      <div className="products">
        {products.map((p) => (
          <div className='product' key={p.id}>
            <Link to={`/item/${p.id}`}>
              <img src={p.image} alt={p.title} />
              <div className='product-info'>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;