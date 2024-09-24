import React from 'react';
const Producto = ({nombreProducto,precio,descripcion,enStock}) => {
    
  const Stok = () => (enStock==true?<h2 className="activo">En Stock</h2>:<h2 className="agotado">Agotado</h2>);
  return (
    <div className="box">
      <h1>{nombreProducto}</h1>
      <h2>${precio}</h2>
      <p>{descripcion}</p>
      <Stok/>
    </div>
  );
};
  /*
  nombreProducto
  precio
  descripcion
  enStock
 */
  export default Producto;