    // Función para agrupar y sumar productos por id
    export const groupAndSumProducts = (cart) => {
        return cart.reduce((accumulator, product) => {
          const existingProductIndex = accumulator.findIndex((item) => item.id === product.id);
    
          if (existingProductIndex !== -1) {
            // El producto ya existe en la agrupación, actualiza cantidad y total
            accumulator[existingProductIndex].quantity += product.quantity;
            accumulator[existingProductIndex].total += product.subtotal;
          } else {
            // El producto no existe en la agrupación, agrégalo
            accumulator.push({ ...product });
          }
    
          return accumulator;
        }, []);
      };



