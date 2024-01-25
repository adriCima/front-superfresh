import iconfacebook from '../../../public/svg/facebookIcon.svg'
import iconwhastapp from '../../../public/svg/whatsappIcon.svg'

export default function TopBar(){
    return(
        <>
            <div className="w-full h-11 bg-red-500 flex items-center justify-center px-8 border-b-[1px] border-white lg:justify-between">
                <div className="hidden lg:flex gap-4">
                   <a href="#">
                    <img className='w-8 h-8' src={iconfacebook} alt="superfresh facebook icon" />
                   </a>
                   <a href="#">
                    <img className='w-8 h-8' src={iconwhastapp} alt="superfresh facebook icon" />
                   </a>
                </div>
                <div className="text-white text-center">
                    Envíos a domicilio <strong>GRATIS</strong> a partir de<strong> Bs. 150</strong>
                </div>  
            </div>
        </>
    )
}