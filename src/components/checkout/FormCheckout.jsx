import { TruckIcon, CurrencyDollarIcon, ClipboardDocumentIcon, CreditCardIcon } from "@heroicons/react/24/outline"
import { useState } from 'react';

export default function FormCheckout({subtotal}){

    const [shippingType, setShippingType] = useState(0);

    const handleSelecChange = (e) => {
        setShippingType(e.target.value)
    }

    const shippingResult = () => {
        if(shippingType === 1){
            return(
                <p> <strong>Nuestra dirección:</strong>  Zona Villa Fátima, calle Beni N° 1585</p>
            )
        }else if(shippingType === 2){
            return(
                <>
                     <select 
                        className="h-10 bg-slate-300 rounded-md border-[1px] border-gray-400 "
                        name=""      
                    >
                        <option value="0">Seleccionar -- </option>
                        <option value="1">Villa Fátima</option>
                        <option value="2">Miraflores</option>
                        <option value="3">Sopocachi</option>
                        <option value="4">Centro</option>
                    </select> 
                    <label>
                        DIRECCIÓN
                        <input type="text" placeholder="Dirección" />
                    </label>
                </>
            )
        }else{
            return(
                <>
                    <p>Selecciona el tipo de entrega</p>
                </>
            )
        }
    }
    return(
        <>
            <form className=" lg:flex gap-8 lg:justify-between">
                    <div className="flex flex-col w-full md:w-1/2"> 

                        <div className="flex flex-col gap-4 px-8">
                            <div className="flex items-center gap-4 border-b-[1px] border-green-950 p-2 "> 
                                <span className="text-green-900 font-bold text-lg">1.- </span>  
                                <TruckIcon className="w-8 h-8 text-green-900"/>                                          
                                <h3 className="font-bold">  TIPO DE ENTREGA</h3>
                            </div>
                           <div className="flex flex-col gap-4 px-16">
                            <select 
                                className="h-10 bg-slate-300 rounded-md border-[1px] border-gray-400 "
                                name="txt_shipping" 
                                onChange={handleSelecChange}
                                value={shippingType}
                            >
                                <option value="0">Seleccionar -- </option>
                                <option value="1">Retiro en tienda</option>
                                <option value="2">Envio a domicilio</option>
                            </select> 
                                <div className="ml-8 min-h-24">
                                       {shippingResult}
                                </div>
                           </div>
                        </div>      

                        <div className="flex flex-col gap-4 px-8">
                            <div className="flex items-center gap-4 border-b-[1px] border-green-950 p-2 "> 
                                <span className="text-green-900 font-bold text-lg">2.- </span>  
                                <CurrencyDollarIcon className="w-8 h-8 text-green-900"/>                                          
                                <h3 className="font-bold">MÉTODO DE PAGO</h3>
                            </div>
                            <div className="flex gap-8 px-16">
                                <div className="div">
                                    <div>
                                        <input className="mr-4" type="radio" id="efectivo" name="drone" value="efectivo"/>
                                        <label for="efectivo">Pago en efectivo</label>
                                    </div>                            
                                    <div>
                                        <input className="mr-4" type="radio" id="dewey" name="drone" value="dewey" />
                                        <label for="dewey">Tigo Money</label>
                                    </div>
                                    <div>
                                        <input className="mr-4" type="radio" id="louie" name="drone" value="louie" />
                                        <label for="louie">QR - Simple</label>
                                    </div>        
                                </div>
                                <div className=" min-h-24">
                                    RESULTADO DE METODO DE PAGO
                                </div>                               
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="flez flex-col w-full md:w-1/2">                        
                        <div className="flex flex-col gap-4 px-8 mb-4">
                            <div className="flex items-center gap-4 border-b-[1px] border-green-950 p-2"> 
                                <span className="text-green-900 font-bold text-lg">2.- </span>  
                                <ClipboardDocumentIcon className="w-8 h-8 text-green-900"/>                                          
                                <h3 className="font-bold">FACTURACIÓN</h3>
                            </div>
                           <div className="flex flex-col gap-4 px-16">
                                <label className="text-gray-700 font-bold text-sm">
                                    NIT:
                                    <input className="h-10 bg-gray-300 w-full pl-8 rounded-md" type="text" placeholder="NIT o CI" />
                                </label>
                                <label className="text-gray-700 font-bold text-sm">
                                    RAZON SOCIAL:
                                    <input className="h-10 bg-gray-300 w-full pl-8 rounded-md" type="text" placeholder="Direccion" />
                                </label>
                           </div>
                        </div>

                        <div className="flex flex-col gap-4 px-8">
                            <div className="flex items-center gap-4 border-b-[1px] border-green-950 p-2"> 
                                <span className="text-green-900 font-bold text-lg">4.- </span>  
                                <CreditCardIcon className="w-8 h-8 text-green-900"/>                                          
                                <h3 className="font-bold">FINALIZAR PAGO</h3>
                            </div>  
                            <div className="grid grid-cols-2">
                                <div className="px-8">
                                    <h3 className='text-lg mb-4'>Si tienes un cupón de descuento registralo aqui:</h3>
                                    <input 
                                        className='bg-gray-300 w-full px-4 py-2 rounded-lg mb-4'
                                        placeholder='Código de cupón' type="text" />
                                    <button className=' bg-blue-950 text-white px-8 py-2 text-lg rounded-lg'>Aplicar</button>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between  pr-16 rounded-sm h-10 w-full text-gray-600 font-bold text-lg">
                                        <p>ENVÍO</p>
                                        <p>0</p>
                                    </div>
                                    <div className="flex items-center justify-between  pr-16 rounded-sm h-10 w-full text-gray-600 font-bold text-lg">
                                        <p>DESCUENTO</p>
                                        <p>0</p>
                                    </div>
                                    <div className="flex items-center justify-between  px-16  bg-green-200 rounded-lg h-16 w-full text-green-800 font-bold text-xl">
                                        <p>TOTAL</p>
                                        <p>{subtotal.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                           
                            <button className="bg-green-600 w-64 self-end text-white px-6 py-2 rounded-lg hover:bg-green-800">Realizar el Pedido</button>

                        </div>
                    </div>

                </form>
        </>
    )
}