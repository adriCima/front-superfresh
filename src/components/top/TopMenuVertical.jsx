
export default function TopMenuVertical(){
    return(
        <>
            <nav className="h-60 w-full flex items-center bg-yellow-400 md:hidden">
                <ul className=" flex flex-col gap-4 justify-start items-start pl-4 ">

                    <a href='/' >
                        <li className="text-center cursor-pointer underline-offset-4 hover:underline hover:text-gray-500">Inicio</li>
                    </a>
                    <a href='#' >
                        <li className="text-center cursor-pointer underline-offset-4 hover:underline hover:text-gray-500">Ofertas</li>
                    </a>
                    <a href='#' >
                        <li className="text-center cursor-pointer underline-offset-4 hover:underline hover:text-gray-500">Nuevos</li>
                    </a>
                    <a href='/products' >
                        <li className="text-center cursor-pointer underline-offset-4 hover:underline hover:text-gray-500">Tienda</li>
                    </a>
                    <a href='categories' >
                        <li className="text-center cursor-pointer underline-offset-4 hover:underline hover:text-gray-500">Categorias</li>
                    </a>
                    
                </ul>
            </nav>
        </>
    )
}