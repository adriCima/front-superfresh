import  { useState, useEffect } from 'react';

import { CardProduct } from './CardProduct';

async function cargarDatos(id, setProducts) {
  try {
    const response = await fetch(`http://localhost:3000/api/products/related/${id}`);
    if (!response.ok) {
      throw new Error('Error al cargar los productos relacionados');
    }
    const data = await response.json();
    setProducts(data);
    console.log(data);
  } catch (error) {
    console.error('Error al obtener productos:', error);
  }
}

// Componente de renderizado
function RenderizarProductos({ products }) {
  console.log(products);

  return (
    <div className='py-16 grid grid-cols-2 lg:flex gap-16 lg:items-center lg:justify-center'>
      {
        products && products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))
      }
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
  return (
    <>
      <RenderizarProductos products={products} />
    
    </>

  )
    
}


