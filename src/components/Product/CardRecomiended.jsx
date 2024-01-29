import React, { useState, useEffect } from 'react';

import { CardProduct } from './CardProduct';

// Función para cargar datos
async function cargarDatos(id, setProducts) {
  try {
    const response = await axios.get('/api/products/related/' + id);
    setProducts(response.data);
  } catch (error) {
    console.error('Error al obtener productos:', error);
  }
}

// Componente de renderizado
function RenderizarProductos({ products }) {
  console.log(products);
  return (
    <div className='py-16 grid grid-cols-2 lg:flex gap-16 lg:items-center lg:justify-center'>
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

// Componente principal
export default function CardRecomiended({ id }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Realizando llamada de datos para id:', id);
    cargarDatos(id, setProducts);
  }, [id]);

  // Renderizado del componente
  return <RenderizarProductos products={products} />;
}
