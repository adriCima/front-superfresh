import axios from "axios";
import { useState, useEffect } from "react"
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const SwWelcome = (name, lastname) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1500
    
    });
    Toast.fire({
        icon: "success",
        title:`Binvenido ${name} ${lastname}`
    });
};

  const SwNoUser = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2500
       
      });
      Toast.fire({
        icon: "error",
        title: "Usuario o contraseña incorrectos"
      });
  };

  const SwCompleta = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2500
       
      });
      Toast.fire({
        icon: "warning",
        title: "Completa todos los campos"
      });
  };

export default function FormLoginMarket(){

    const router = useRouter()
  

    const [formLogin, setFormLogin] = useState({
        correo: '',
        pass: '',
    });

    const handleChange = (e) => {       
       setFormLogin({
        ...formLogin,
        [e.target.name]: e.target.value
       })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            //validar que los campos estén completos
            if(!formLogin.correo || !formLogin.pass){      
                SwCompleta()                
                return;
            }   
            //enviamos los datos 
            const response = await axios.get(`/api/login/${formLogin.correo}/${formLogin.pass}`);
            console.log('respuesta de la API', response.data);           
            router.push('/market/account');
            SwWelcome(response.data.name, response.data.lastname);

        } catch (error) {
            //Errores de la solicitud
            console.log('Error del servidor ', error.message); 
            SwNoUser()           
        }
    }

      return (
        <article className=" border-[1px] w-[450px] h-full border-slate-400 rounded-lg py-8 bg-gray-300 flex flex-col items-center justify-center gap-8 ">         
                <h3 className="text-center text-3xl font-semibold text-teal-800">INICIAR SESION</h3>

                <form 
                
                    className="flex flex-col gap-4"
                >                  
                
                    <label className="text-gray-700 font-bold text-lg">
                        Nombre de usuario:
                        <input
                        onChange={ handleChange }
                        value={formLogin.correo}
                        name="correo"
                        className="w-full h-10 bg-slate-200 rounded-md mt-2 p-4 text-gray-700"
                        type="email"
                        placeholder="Correo electrónico"
                        autoFocus
                        />
                    </label>
                    <label className="text-gray-700 font-bold text-lg">
                        Password:
                        <input
                        onChange={ handleChange }
                        name="pass"
                        value={formLogin.pass}
                        className="w-full h-10 bg-slate-200 rounded-md mt-2 p-4 text-gray-700"
                        type="password"
                        placeholder="***"
                        />
                    </label>
                
                    <div className="my-4 flex justify-start gap-4">
                        <a  href='#'>
                            <button
                                onClick={handleSubmit}
                                className=" bg-slate-600 px-6 py-2 rounded-md text-white font-medium hover:bg-teal-800"
                            >
                                REGISTRAR
                            </button>
                        </a>                        
                    </div>
                </form> 

                <div className="w-full flex items-center justify-between px-16">                       
                    <a href="#" className="underline text-sm underline-offset-4 text-gray-800 font-bold decoration-gray-800 decoration-1 hover:text-blue-700 hover:decoration-blue-700" > Recuperar contraseña</a>
                    <a href="singin" className="underline text-sm underline-offset-4 text-gray-800 font-bold decoration-gray-800 decoration-1 hover:text-blue-700 hover:decoration-blue-700" > Crear cuenta</a>
                </div>            
        </article>
      );
    }
