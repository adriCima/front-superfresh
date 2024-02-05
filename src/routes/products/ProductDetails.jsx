import { useParams } from 'react-router'
import MainLayout from '../../components/Layouts/MainLayout';
import { useEffect, useState } from 'react';
import SingleProduct from '../../components/Product/SingleProduct.jsx'
import BannerSm from '../../components/banners/BannerSm.jsx';

export default function ProductDetails(){
  

    let { productid } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProductDetails() {
            try {
                const response = await fetch(`http://localhost:3000/api/products/${productid}`);
                if (!response.ok) {
                    throw new Error('Error al cargar los detalles del producto');
                }
                const data = await response.json();
                setProduct(data); 
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProductDetails();
    }, [productid]);

    return(
        <>
            <MainLayout> 
                <BannerSm className='mx-16 my-8'/>
                <SingleProduct product={product}/>            
            </MainLayout>  
        </>
    )
}



