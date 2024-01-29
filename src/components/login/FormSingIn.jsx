import { useState, useRef } from 'react';
import { useRouter } from "next/navigation";
import { registerUser } from '@/libs/api';
import Swal from 'sweetalert2';

const SwCompletarCampos = () => {  
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son requeridos",        
    });
};

const SwPassNoCoinciden = () => {  
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden",        
    });
};

const SwSuccesfull = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
        Toast.fire({
            icon: "success",
            title: "Registro Exitoso"
    });
}

const SwEmailRepetido = () => {  
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "ya existe un usuario con ese correo",        
    });
};


export default function FormSingIn(){
    const form = useRef(null)
    const router = useRouter()

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        contraseña: '',
        confirmarContraseña: '',
        terminosAceptados: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleRegistro = async () => {
        try {
            // Validar que todos los campos estén completos
            if (!formData.nombre || !formData.apellido || !formData.correo || !formData.contraseña || !formData.confirmarContraseña || !formData.terminosAceptados) {
                SwCompletarCampos()
                return;
            }
    
            // Validar que las contraseñas coincidan
            if (formData.contraseña !== formData.confirmarContraseña) {
                SwPassNoCoinciden()
                return;
            }
        
            // Realizar solicitud a la API para el registro
            const response = await registerUser({
                name: formData.nombre,
                lastname: formData.apellido,
                correo: formData.correo,
                pass: formData.contraseña,
                id_type: 4            
            });     
            
             // Iniciar sesión después del registro exitoso
                const signInResult = await signIn('credentials', {
                    redirect: false, // Evitar redirección automática
                    username: formData.correo, // Puedes usar el correo como nombre de usuario
                    password: formData.contraseña,
                });
            
                if (signInResult.error) {
                    // Manejar el error, quizás mostrando un mensaje al usuario
                    console.error('Error de inicio de sesión después del registro:', signInResult.error);
                } else {
                    // Redirigir a la página de cuenta después del inicio de sesión exitoso
                    router.push('/market/account');
                }

        } catch (error) {
            SwEmailRepetido()
        }   
        
        SwSuccesfull()
    };

    return(
        <article className=" border-[1px] w-[450px] h-full border-slate-400 rounded-lg py-8 bg-gray-300 flex flex-col items-center justify-center gap-8 ">         
                <h3 className="text-center text-3xl font-semibold text-teal-800">CREAR CUENTA</h3>

                <form className="flex flex-col gap-4 px-8">
                    
                    <div className='flex justify-between gap-4'>
                        <label className="text-gray-700 font-bold text-lg">
                            Nombre:
                            <input
                                className="w-full h-10 bg-slate-200 rounded-md mt-2 p-4 text-gray-700"
                                type="text" 
                                name="nombre" 
                                value={formData.nombre} 
                                onChange={handleInputChange} 
                                placeholder="Nombre"
                                autoFocus
                            />
                        </label>
                        
                        <label className="text-gray-700 font-bold text-lg">
                            Apellido:
                            <input
                                className="w-full h-10 bg-slate-200 rounded-md mt-2 p-4 text-gray-700"
                                type="text" 
                                name="apellido" 
                                value={formData.apellido} 
                                onChange={handleInputChange}
                                placeholder="Apellido"
                            />
                        </label>
                    </div>

                    <label className="text-gray-700 font-bold text-lg">
                        Email:
                        <input
                            className="w-full h-10 bg-slate-200 rounded-md mt-2 p-4 text-gray-700"
                            type="email" 
                            name="correo" 
                            value={formData.correo} 
                            onChange={handleInputChange} 
                            placeholder="Correo electrónico"
                        />
                    </label>
                    <label className="text-gray-700 font-bold text-lg">
                        Contraseña:
                        <input
                            className="w-full h-10 bg-slate-200 rounded-md mt-2 p-4 text-gray-700"
                            type="password" 
                            name="contraseña" 
                            value={formData.contraseña} 
                            onChange={handleInputChange}
                            placeholder="***"
                        />
                    </label>
                    <label className="text-gray-700 font-bold text-lg">
                        Confirmar Contraseña:
                        <input
                            className="w-full h-10 bg-slate-200 rounded-md mt-2 p-4 text-gray-700"
                            type="password" 
                            name="confirmarContraseña" 
                            value={formData.confirmarContraseña} 
                            onChange={handleInputChange}
                            placeholder="***"
                        />
                    </label>
                    <label className="text-gray-700 font-bold text-sm flex items-center gap-4">
                        <input                             
                            type="checkbox" 
                            name="terminosAceptados" 
                            checked={formData.terminosAceptados} 
                            onChange={handleInputChange} 
                        />
                        Acepto los términos y condiciones
                    </label>
                  
                    <div className="my-4 flex justify-start gap-4">                      
                        <button
                            className=" bg-slate-600 px-6 py-2 rounded-md text-white font-medium hover:bg-teal-800"
                            type='button'
                            onClick={handleRegistro}
                            ref={ form }
                        >
                            REGISTRAR
                        </button>
                                               
                    </div>
                </form> 

                <div className="w-full flex items-center justify-between px-16">                       
                    <a href="login" className="underline text-sm underline-offset-4 text-gray-800 font-bold decoration-gray-800 decoration-1 hover:text-blue-700 hover:decoration-blue-700" > Ya tengo una cuenta INGRESAR</a>
                </div>            
        </article>
    )
}