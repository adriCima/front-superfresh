import { TruckIcon, CurrencyDollarIcon, ClipboardDocumentIcon, CreditCardIcon, BanknotesIcon } from "@heroicons/react/24/outline"
import qrpago from '../../assets/checkout/qr_example.png'
import { useState } from "react"

export default function FormCheckout({subtotal}){
    const [shippingType, setShippingType] = useState(0);
    const [shippingContent, setShippingContent] = useState(null)
    const [paymethod, setPayMethod] = useState('')
    const [shippingCost, setShippingCost] = useState(0)
    const [discountCode, setDiscountCode] = useState('')
    const [discountAmount, setDiscountAmount] = useState(0);
    const [discountApplied, setDiscountApplied] = useState(false);
    const [fromData, setFormData] = useState({
        shipping_type: "",
        zona:"",
        direcccion: "",
        nit:"",
        razon_social:"",
        shipping_cost:"",
        discount:"",
        discoun_code:"",
        total:"",
        pay_type:"",
        telefono_tm:"",
    })
    

    // Arreglo de ejemplo para los cupones de descuento
    const discountCodes = [
        { codigo: "DESCSP10", porcentaje: 20},
        { codigo: "ESPMADRE", porcentaje: 10}
    ]

    const applyDiscount = (e) => {
        e.preventDefault();    
       
        if (discountCode.length === 8) {
            const discount = discountCodes.find(code => code.codigo === discountCode);    
                if (discount) {
                    const discountAmount = subtotal * (discount.porcentaje / 100);
                    setDiscountAmount(discountAmount);
                    setDiscountApplied(true);                    
                } 
            } 
        }

    // METODO DE ENTREGA
    const handleShippingChange = (e) => {
        const valueselect = parseInt(e.target.value, 10);
        setShippingType(valueselect);

        // cambiar el valor de costo de envio
        let cost = 0;
        if(valueselect === 2) {
            cost = 10
        }
        setShippingCost(cost);

        // Contendido dinámicos
        switch (valueselect) {
            case 1:
                setShippingContent(
                    <> 
                        <p className="font-bold">Nuestra dirección:</p> 
                        <p className="text-lg font-medium text-red-800">Zona Villa Fátima, calle Beni N° 1585</p>
                    </>
                )
                break;
            case 2:
                setShippingContent(
                    <>
                        <select
                            className="h-10 bg-slate-100 rounded-md border-[1px] border-gray-400 w-full mb-2 pl-4"
                            name="zona"
                            >
                            <option value="0">Seleccionar -- </option>
                            <option value="1">Villa Fátima</option>
                            <option value="2">Miraflores</option>
                            <option value="3">Sopocachi</option>
                            <option value="4">Centro</option>
                        </select>
                        <label className="font-bold text-gray-600">
                            DIRECCIÓN
                            <input 
                                className="w-full my-2 bg-slate-100 border-[1px] border-gray-400 rounded-md h-10 pl-4 font-medium "
                                type="text" placeholder="Dirección"
                                name="direccion"
                            />
                        </label>
                    </>
                )
                break;        
            default:
                setShippingContent(null)
                break;
        }
    };

    // SELECCIONAR EL METODO DE PAGO
    const handlePayMethod = (e) => {
        setPayMethod(e.target.value)
    }

    let payContent;

    if(paymethod === 'efectivo'){
        payContent = (
            <><p className="flex w-full h-full items-center justify-center text-teal-900 font-semibold text-6xl">Bs. { ((subtotal + shippingCost) - discountAmount).toFixed(2) }</p></>
        )
    }else if(paymethod === 'tigomoney'){
        payContent = (
            <>
                <label className="font-bold text-gray-600">
                    NÚMERO TIGO MONEY
                    <input 
                    className="w-full my-2 bg-slate-200 border-[1px] border-gray-400 rounded-md h-10 pl-4 font-medium"
                    type="text" 
                    placeholder="XXX-XXXXX" />                                    
                </label>
                <strong className="text-red-800">Finalize el proceso, recibirá la confirmación del pedido en cuanto registremos correctamente la transacción</strong>
            </>
        )
    }else if(paymethod === 'qr'){
        payContent = (
            <> 
                <div className="w-full flex items-center justify-center gap-2">
                    <img src={qrpago} alt={qrpago} />                 
                                                   
       
                </div>
              
                <ol className="text-red-800 text-sm text-balance font-bold list-decimal mb-4">
                    <li>Escane el Codigo QR</li>
                    <li>Realize el pago</li>
                    <li>Envíe el comprobante por whatsapp.</li>                   
                    <li>Finalice el proceso</li>                   
                    <li>Recibirá la confirmación del pedido en cuanto registremos correctamenta la transacción</li>
                </ol>
                <a  
                    target="blanck"
                    href="https://wa.me/59175226707" 
                    className="bg-teal-700 px-6 py-2 text-white rounded-md "> 
                    Enviar Comprobante
                </a>

            </>
        )
    }
    

    return(
        <>
            <form className=" lg:flex gap-8 lg:justify-between">
                    <div className="flex flex-col w-full md:w-1/2"> 
                        <div className="flex flex-col gap-4 lg:px-4">
                            <div className="flex items-center gap-4 border-b-[1px] border-green-950 p-2 "> 
                                <span className="text-green-900 font-bold text-lg">1.- </span>  
                                <TruckIcon className="w-8 h-8 text-green-900"/>                                          
                                <h3 className="font-bold">  TIPO DE ENTREGA</h3>
                            </div>
                            <div className="flex flex-col gap-4 md:px-2">
                                <select 
                                    className="h-10 bg-slate-200 rounded-md border-[1px] border-gray-400 pl-4 "
                                    name="shipping_type"                                 
                                    onChange={handleShippingChange}
                                >
                                    <option value="0">Seleccionar -- </option>
                                    <option value="1">Retiro en tienda</option>
                                    <option value="2">Envio a domicilio</option>
                                </select> 
                                <div className="mx-4 md:ml-8 min-h-24">
                                    { shippingContent }
                                </div>
                            </div>
                        </div>      
                        
                        <div className="flex flex-col gap-4 lg:px-4 mb-4">
                            <div className="flex items-center gap-4 border-b-[1px] border-green-950 p-2"> 
                                <span className="text-green-900 font-bold text-lg">2.- </span>  
                                <ClipboardDocumentIcon className="w-8 h-8 text-green-900"/>                                          
                                <h3 className="font-bold">FACTURACIÓN</h3>
                            </div>
                            <div className="flex flex-col gap-4 px-2">
                                <label className="text-gray-700 font-bold text-sm">
                                    NIT:
                                    <input 
                                        className="h-10 bg-slate-200 border-[1px] border-gray-400 w-full pl-4 rounded-md font-medium" 
                                        type="text"
                                        placeholder="NIT o CI"
                                        name="nit"
                                    />
                                </label>
                                <label className="text-gray-700 font-bold text-sm">
                                    RAZON SOCIAL:
                                    <input 
                                        className="h-10 bg-slate-200 border-[1px] border-gray-400 w-full pl-4 rounded-md font-medium" 
                                        type="text" 
                                        placeholder="Direccion"
                                        name="razon_social"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 lg:px-4">
                            <div className="flex items-center gap-4 border-b-[1px] border-green-950 p-2 "> 
                                <span className="text-green-900 font-bold text-lg">3.- </span>  
                                <CurrencyDollarIcon className="w-8 h-8 text-green-900"/>                                          
                                <h3 className="font-bold">DESCUENTO</h3>
                            </div>
                            <div className="px-2 lg:px-4">
                                <h3 className='text-base mb-4'>Si tienes un cupón de descuento registralo aqui:</h3>
                                <input 
                                    className='bg-gray-200 w-full pl-4 py-2 rounded-md mb-4 border-[1px] border-gray-400 font-medium'
                                    placeholder='Código de cupón' 
                                    type="text" 
                                    name="discount"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                />
                                <button                                    
                                    className={`bg-blue-950 text-white px-8 py-2 text-lg rounded-lg mb-4 ${discountCode.length !== 8 || discountApplied ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={discountCode.length !== 8}
                                    onClick={applyDiscount}
                                >

                                    Aplicar
                                </button>
                            </div>                  
                        </div>
                    </div>

                    <div className="flez flex-col w-full md:w-1/2">                      

                        <div className="flex flex-col gap-4 lg:px-4">
                            <div className="flex items-center gap-4 border-b-[1px] border-green-950 p-2"> 
                                <span className="text-green-900 font-bold text-lg">4.- </span>  
                                <CurrencyDollarIcon className="w-8 h-8 text-green-900"/>                                          
                                <h3 className="font-bold">TOTALES</h3>
                            </div>  
                            <div className="px-2 lg:px-4">                               
                                <div className="flex flex-col ">
                                    <div className="flex items-center justify-between  pr-16 rounded-sm h-10  w-full text-gray-600 font-bold text-lg">
                                        <p>ENVÍO</p>
                                        <p>Bs. { shippingCost.toFixed(2) }</p>
                                    </div>
                                    <div className="flex items-center justify-between  pr-16 rounded-sm  h-10 w-full text-gray-600 font-bold text-lg">
                                        <p>DESCUENTO</p>
                                        <p>Bs. {discountAmount.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center justify-between mb-8 px-16  bg-green-200 rounded-lg h-10 w-full text-green-800 font-bold text-xl">
                                        <p>TOTAL</p>
                                        <p> Bs. { ((subtotal + shippingCost) - discountAmount).toFixed(2) }</p>
                                    </div>
                                </div>
                            </div>
                        

                        </div>

                        <div className="flex flex-col gap-4 lg:px-4">
                            <div className="flex items-center gap-4 border-b-[1px] border-green-950 p-2"> 
                                <span className="text-green-900 font-bold text-lg">5.- </span>  
                                <CreditCardIcon className="w-8 h-8 text-green-900"/>                                          
                                <h3 className="font-bold">MÉTODO DE PAGO</h3>
                            </div>  
                        
                            <div className="grid  md:grid-cols-2 gap-2 px-2 md:px-4 mb-6 ">
                                <div className="flex flex-col ">
                                    <div>
                                        <input className="mr-4" type="radio" name="payMethod" value="efectivo" onChange={handlePayMethod}/>
                                        <label for="efectivo">Pago en efectivo</label>
                                    </div>                            
                                    <div>
                                        <input className="mr-4" type="radio" name="payMethod" value="tigomoney" onChange={handlePayMethod} />
                                        <label for="tigomoney">Tigo Money</label>
                                    </div>
                                    <div>
                                        <input className="mr-4" type="radio" name="payMethod" value="qr" onChange={handlePayMethod} />
                                        <label for="qr">QR - Simple</label>
                                    </div>        
                                </div>
                                <div className=" min-h-48">
                                    { payContent }
                                </div>                              
                            </div>                        
                        </div>

                        <div className="flex flex-col gap-4 lg:px-4">
                            <div className="flex items-center gap-4 border-b-[1px] border-green-950 p-2"> 
                                <span className="text-green-900 font-bold text-lg">6.- </span>  
                                <BanknotesIcon className="w-8 h-8 text-green-900"/>                                          
                                <h3 className="font-bold">FINALIZAR PEDIDO</h3>
                            </div>                        
                            
                            <button className="bg-teal-600 w-64 text-lg self-star text-white px-6 py-2 rounded-lg hover:bg-green-800">Realizar el Pedido</button>

                        </div>
                    </div>
                </form>
        </>
    )
}