import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      {/* Aquí eventualmente se mostrarán los productos */}
    </div>
  );
};

export default ItemListContainer;