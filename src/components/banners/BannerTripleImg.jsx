import ban_retiroentienda from '../../assets/banners/retiro.png'
import ban_enviosadomicilio from '../../assets/banners/envios.png'
import ban_alimentosfrescos from '../../assets/banners/frescos.png'

export default function BannerTripeImg(){  
    return(
        <>
            <section className="flex items-center justify-center mt-8">
                <article className="grid grid-cols-1 gap-4 pt-4 pb-16 px-16 md:grid-cols-3"> 
                    <div className="rounded-lg overflow-hidden">
                        <img src={ban_retiroentienda} alt="retiro en tienda" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img src={ban_enviosadomicilio} alt="envio a domicilio" />
                    </div>   
                    <div className="rounded-lg overflow-hidden">
                        <img src={ban_alimentosfrescos} alt="alimentos frescos" />
                    </div>
                </article>
            </section>
        </>
    )
}