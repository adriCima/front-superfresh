export default function FormDatosEnvio(){
    return(
        <>
             <form className="py-8 px-32">
                        <div className="flex gap-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-1/2 appearance-none">
                                NOMBRE: *
                                <input 
                                className="w-full bg-gray-300 h-9 rounded-md pl-4 uppercase"
                                type="text"
                                autoFocus />
                            </label>
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-1/2">
                                APELLIDO: *
                                <input 
                                className="w-full bg-gray-300 h-9 rounded-md"
                                type="text" />
                            </label>
                        </div>                        
                        <label className="block text-gray-700 text-sm font-bold mb-2 w-full">
                            DOMICILIO: *
                            <input 
                            className="w-full bg-gray-300 h-9 rounded-md"
                            type="text" />
                        </label>
                        
                        <div className="flex gap-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-1/3">
                                    ZONA: *
                                    <input 
                                    className="w-full bg-gray-300 h-9 rounded-md"
                                    type="text" />
                                </label>
                                <label className="block text-gray-700 text-sm font-bold mb-2 w-2/3">
                                    DIRECCION: *
                                    <input 
                                    className="w-full bg-gray-300 h-9 rounded-md"
                                    type="text" />
                                </label> 
                        </div>       
                        <div className="flex gap-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 w-1/3">
                                TELEFONO: *
                                <input 
                                className="w-full bg-gray-300 h-9 rounded-md"
                                type="text" />
                            </label>
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-2/3">
                                CORREO: *
                                <input 
                               className="w-full bg-gray-300 h-9 rounded-md"
                                type="email" />
                            </label>
                        </div>                     
                        <label className="block text-gray-700 text-sm font-bold mb-2 w-full">
                            DETALLES ADICIONALES: *
                            <textarea                              
                                className="w-full bg-gray-300 h-9 rounded-md"
                            />
                        </label>
                    </form>
        </>
    )
}