import React from 'react';

function ItemListContainer({greeting}) {
  return (
    <div className='item-list-container'>
      <h2 className='greeting'>{greeting}</h2>
      <div className="products">
        <div className='product'>
          <img src="../images/producto1.webp" alt="Producto 1" />
|         <div className='product-info'>
            <h3>Producto 1</h3>
            <p>Descripción del producto 1</p>
          </div>
        </div>
        <div className='product'>
          <img src="../images/producto2.webp" alt="Producto 2" />
          <div className='product-info'>
            <h3>Producto 1</h3>
            <p>Descripción del producto 1</p>
          </div>
        </div>
        <div className='product'>
          <img src="../images/producto3.webp" alt="Producto 3" />
          <div className='product-info'>
            <h3>Producto 1</h3>
            <p>Descripción del producto 1</p>
          </div>
        </div>
        <div className='product'>
          <img src="../images/producto4.webp" alt="Producto 4" />
          <div className='product-info'>
            <h3>Producto 1</h3>
            <p>Descripción del producto 1</p>
          </div>
        </div>
        <div className='product'>
          <img src="../images/producto5.webp" alt="Producto 5" />
          <div className='product-info'>
            <h3>Producto 1</h3>
            <p>Descripción del producto 1</p>
          </div>
        </div>
        <div className='product'>
          <img src="../images/producto6.webp" alt="Producto 6" />
          <div className='product-info'>
            <h3>Producto 1</h3>
            <p>Descripción del producto 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;