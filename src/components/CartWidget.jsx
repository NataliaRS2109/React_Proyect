import React from 'react';
// import carritoImg from '';

function CartWidget() {
    return (
      <div className='cart-widget'>
        <img 
          src="../images/carrito-de-compras.png"
          alt="Carrito de compras" 
        />
        <div className="cart-notification">
          3
        </div>
      </div>
    );
}

export default CartWidget;