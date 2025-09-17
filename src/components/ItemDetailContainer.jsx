import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const mockProducts = [
  { id: 1, title: 'Producto 1', description: 'Descripción del producto 1', image: '../images/producto1.webp' },
  { id: 2, title: 'Producto 2', description: 'Descripción del producto 2', image: '../images/producto2.webp' },
  { id: 3, title: 'Producto 3', description: 'Descripción del producto 3', image: '../images/producto3.webp' },
  { id: 4, title: 'Producto 4', description: 'Descripción del producto 4', image: '../images/producto4.webp' },
  { id: 5, title: 'Producto 5', description: 'Descripción del producto 5', image: '../images/producto5.webp' },
  { id: 6, title: 'Producto 6', description: 'Descripción del producto 6', image: '../images/producto6.webp' },
];

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts.find((p) => p.id === Number(itemId)));
      }, 500);
    });

    getProduct.then(setProduct);
  }, [itemId]);

  if (!product) return <p style={{ textAlign: 'center' }}>Cargando...</p>;

  return (
    <div className='item-detail'>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button className='add-to-cart'>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;