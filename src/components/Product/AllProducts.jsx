'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CardProduct } from './CardProduct'


function OfertProuctuContent ({ products }){
   
    return(
        <> 
            {
                products.map(product => (                  
                       
                    <CardProduct
                       product={product}
                       key={product.id}
                    ></CardProduct>
                  
                            
                ))
            }
      
        </>
    )
}

export default function AllProducts(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadOfertProduct(){
            const response = await axios.get('http://localhost:4000/api/products/')
            setProducts(response.data.result)
            console.log(response.data.result);
        }
        loadOfertProduct()
    },[])
    return <OfertProuctuContent products={products}/>
}
