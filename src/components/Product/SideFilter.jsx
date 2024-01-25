'use client'

import { useEffect, useState } from "react"
import axios from "axios"

function TitleFilter({name}){
    return(
        <h3 className="text-green-700 font-bold text-lg ">{name}</h3>
    )
}

function LiElementFilter({name, id}){
    return(
        <li className="mt-1 ">
            <input            
            className="mr-4" 
            type="checkbox" 
            name={name} 
            id={id}/>{name}
        </li> 
    )
}
  


export default function SideFilter(){

    const [loadCat, setLoadCat] = useState([]);
    const [loadSubCat, setLoadSubCat] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                //Cargar categorias
                const categoriesResponse = await axios.get('/api/categories');
                setLoadCat(categoriesResponse.data.result);
                console.log(categoriesResponse);
                // Cargar Subcategorias
                const subcategoriesResponse = await axios.get('/api/subcategories')
                setLoadSubCat(subcategoriesResponse.data.result)
                console.log(subcategoriesResponse);
            } catch (error) {
                console.log("Error al cargar las categorias"), error;
            }
        }
        loadData()
    },[]);


    return(
        <div className="flex h-full w-full flex-col px-3 py-4 md:px-2 ">                    
            <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">  
                <div className="categorias">
                  <TitleFilter name='CATEGORÍAS'/>
                    <ul className="ml-4 uppercase">
                        <LiElementFilter  name='Todos' id='0'></LiElementFilter>
                        {
                            loadCat.map((cat) => (

                                <LiElementFilter key={cat.id} name={cat.category} id={cat.id}/>
                            ))
                        }
                    </ul>
                </div>
                <div className="subcategorias">
                <TitleFilter name='GRUPOS'/>
                    <ul className="ml-4 uppercase">
                        {
                            loadSubCat.map((subcat) => (                                
                                <LiElementFilter key={subcat.id} name={subcat.subcategory} id={subcat.id}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}