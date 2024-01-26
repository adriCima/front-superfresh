
import { groupAndSumProducts } from "../../utils/functions";
import AccordionCheckout from "../checkout/AcordionCheckout";
import FormDatosFacturacion from '../checkout/FormDatosFacturacion'
import FormDatosEnvio from '../checkout/FormDatosEnvio'

import FormCheckout from '../checkout/FormCheckout'
export default function ListCheckout({cart, subtotal}){

    const groupedCart = groupAndSumProducts(cart)
    console.log(groupedCart);
  
    return(
        <>
        <main className="flex flex-col px-16 py-8 md:px-60 ">
            <div className="flex gap-4 items-center border-b-2 border-blue-950 w-full pb-2 pl-8">
                <p>Mensaje para envio GRATIS</p>
            </div>
            <div className="">

                <FormCheckout subtotal={subtotal} />
                
            </div>
        </main>
        </>
    )
}