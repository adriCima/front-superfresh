

export default function IconSvg( href='#', img='image', alt='image'){

    const rutasvg = '../../public/svg/';
    return(        
        <>
            <a  
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    width={28}
                    height={28}                         
                    src={iconfacebook}
                    alt={img}
                    title={alt}
                />                    
            </a>
        </>
    )
}
