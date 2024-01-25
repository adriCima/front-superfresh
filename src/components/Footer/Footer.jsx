import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { PhoneIcon } from "@heroicons/react/24/solid"
import { HomeIcon } from "@heroicons/react/24/solid"
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid"
import { PaperClipIcon } from "@heroicons/react/24/solid"
import { BuildingOfficeIcon } from "@heroicons/react/24/solid"
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { EnvelopeOpenIcon } from "@heroicons/react/24/solid"
import { ClockIcon } from "@heroicons/react/24/solid"
import { UserIcon } from "@heroicons/react/24/solid"
import iconfacebook from '../../assets/svg/facebookIcon.svg'
import iconwhastapp from '../../assets/svg/whatsappIcon.svg'
import iconinstagram from '../../assets/svg/instagramIcon.svg'
import icontiktok from '../../assets/svg/tiktokIcon.svg'
import cash from '../../assets/svg/cash.svg'
import tigomoney from '../../assets/svg/tigo_money.jpg'
import qrsimple from '../../assets/svg/qr_simple.jpg'

export function Footer(){
    return(
        <>
            <footer className=" grid grid-cols-1 gap-1 bg-red-600 text-white md:grid-cols-2 lg:grid-cols-3 py-4">                       

                <div className="flex flex-col items-left justify-between px-8 py-4">
                        <h4 className='text-xl font-semibold self-center mb-8'>CONTÁCTANOS</h4>
                        <div className="text-base my-2 border-b-[1px] boder-white pb-2">                                                     
                            <p className="list-none flex gap-4">  Lunes a Domingo</p>
                            <p className="list-none flex gap-4"><ClockIcon className="h-6 w-6 text-white" />  07:30 - 23:00</p>                            
                        </div>
                        <div className="text-base my-2 border-b-[1px] boder-white pb-2">                                                   
                            <p className="list-none flex gap-4"><PhoneIcon className="h-6 w-6 text-white" />  68258778</p>                               
                            <p className="list-none flex gap-4"><EnvelopeIcon className="h68 w-6 text-white" />  superfreshbolivia@gmail.com</p>
                        </div>     
                        <div className="text-base my-2 border-b-[1px] boder-white pb-2">                                                    
                            <p className="list-none flex gap-4"><MapPinIcon className="h-6 w-6 text-white" />  C/ Alto Beni 1582 z/ Villa Fátima</p>                            
                        </div>
                        <div className="flex self-center mt-2 gap-4">
                        <a
                            href='https://www.facebook.com/profile.php?id=61554451635437'
                            target='blank'
                        >
                            <img 
                                width='28px'
                                src={iconfacebook} 
                                alt="SuperFres facebook" />                 
                        </a>
                        <a
                            href='#'
                            target='blank'
                        >
                            <img 
                            width='28px'
                            src={iconwhastapp} 
                            alt="SuperFres whatsapp" />                 
                        </a>
                        <a
                            href='#'
                            target='blank'
                        >
                            <img 
                                width='28px'
                                src={iconinstagram}
                                alt="SuperFres instagram" />                 
                        </a>
                        <a
                            href='#'
                            target='blank'
                        >
                            <img 
                                width='28px'
                                src={icontiktok} 
                                alt="SuperFres tiktok" />                 
                        </a>
                    </div>                           
                </div>                

                <div className="flex flex-col gap-2 items-left justify-between  px-8 py-4 ">
                    <h4 className='text-xl font-semibold self-center mb-8'>SERVICIO AL CLIENTE</h4>                       
                    <a href='/'>
                        <p className='flex gap-2'><HomeIcon className="h-6 w-6 text-white"/>Inicio</p>
                    </a>
                    <a href='/nosotros'>
                        <p className='flex gap-2'><BuildingOfficeIcon className="h-6 w-6 text-white" />Nosotros</p>
                    </a>
                    <a href='/perfil'>
                        <p className='flex gap-2'><UserIcon className="h-6 w-6 text-white" />Mi cuenta</p>
                    </a>
                    <a href='/faq'>
                        <p className='flex gap-2'><QuestionMarkCircleIcon className="h-6 w-6 text-white" />Preguntas Frecuentes</p>
                    </a>
                    <a href='/metodos-de-pago'>
                        <p className='flex gap-2'><CurrencyDollarIcon className="h-6 w-6 text-white" />Formas de Pago</p>
                    </a>
                    <a href='/politicas-de-devolucion'>
                        <p className='flex gap-2'><PaperClipIcon className="h-6 w-6 text-white" />Términios y condiciones</p>
                    </a>
                    <a href='/contacto'>
                        <p className='flex gap-2'><EnvelopeOpenIcon className="h-6 w-6 text-white" />Contácto</p>
                    </a>
                        
                </div>

                <div className="flex flex-col gap-8 px-8 py-4">
                    <h4 className='text-xl font-semibold self-center mb-2'>MÉTODOS DE PAGO</h4>
                    <div className="flex flex-wrap gap-4 w-full items-center justify-center px-16">                       
                        <img className="rounded-xl" width= "45px" height="45px" src={qrsimple} alt="Qr Simple"/>
                        <img className="rounded-xl" width= "45px" height="45px" src={tigomoney} alt="Tigo Money"/>                       
                        <img className="rounded-xl" width= "45px" height="45px" src={cash} alt="Cash"/>                       
                    </div>                        
                </div>         
                
            </footer>
            <div className="flex items-center border-t-[1px] border-gray-400 py-2 px-16 text-base bg-red-600 text-white">
                <p>Derechos Reservados © <span className='font-semibold'>SuperFresh / Bolivia - 2024</span></p>
            </div>
        </>
    )
}
