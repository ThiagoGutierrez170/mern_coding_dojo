import React, { useState } from 'react';

const Producto = ({ nombreProducto, precio, descripcion, enStock }) => {
  //declaro el elemento del prop que tendra modificaciones
  const [stock, setStock] = useState(enStock);
  //con el setstock realizo las actualizaciones del elemento
  const Comprar = () => {
      setStock(prevStock => prevStock - 1);
  };

  const Stok = () => (stock > 0 
    ? <h2 className="activo">En Stock: {stock}</h2> 
    : <h2 className="agotado">Agotado</h2>
  );

  return (
    <div className="box">
      <h1>{nombreProducto}</h1>
      <h2>${precio}</h2>
      <p>{descripcion}</p>
      <Stok/>
      <button className='comprar' onClick={Comprar} disabled={stock === 0}>Comprar</button>
    </div>
  );
};

export default Producto;
