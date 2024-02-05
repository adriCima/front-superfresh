import iconwhastapp from '../../assets/svg/whatsappIcon.svg'
export default function WhatsAppFloat(){
    return(
        <>
            <div className="fixed bottom-12 right-12 z-10">
                <a        
                href='https://bit.ly/3NXBsqn' // link de WhatsApp de SuperFresh  68258778
                target='blank'
                >
                <img 
                    className='w-14 h-14'
                    src={iconwhastapp}
                    alt="SuperFres Facebook" />                 
                </a>
          </div>    
        </>
    )
}