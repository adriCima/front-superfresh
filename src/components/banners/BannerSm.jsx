import bannersm1_web from '../../assets/banners/banner_sm.png'

export default function BannerSm({className}){
    return(
        <>
            <div className={className}>
                <img src={bannersm1_web} alt="banner superFresh" />
            </div>
        </>
    )
}