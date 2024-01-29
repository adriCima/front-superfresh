export default function TopMenu(){
    return(
        <>
            <nav className="hidden md:block w-full h-10 bg-yellow-300 text-black font-medium ">
                <ul className="w-full md:w-1/2 h-full grid grid-cols-5 items-center divide-x divide-black ">                    
                    <a href="/" > <li className="text-center underline-offset-4 hover:underline">Inicio</li> </a>
                    <a href="#" > <li className="text-center underline-offset-4 hover:underline">Ofertas</li> </a>
                    <a href="#" > <li className="text-center underline-offset-4 hover:underline">Nuevos</li> </a>
                    <a href="/products" > <li className="text-center underline-offset-4 hover:underline">Tienda</li> </a>
                    <a href="/categories" > <li className="text-center underline-offset-4 hover:underline">Categorias</li> </a>
                </ul>
            </nav>
        </>
    )
}