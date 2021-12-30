import { ChangeEvent, useState } from 'react'



// si o si tiene que ir como un const , el T es para decir que es un tipo generico
export const useForm=<T extends object>(initState:T)=> {
    const [formulario, setFormulario] = useState(
       initState
    );

    const handleChange=({target}:ChangeEvent<HTMLInputElement>)=>{
        // lo destructurizo 
        const {name,value}=target;
        setFormulario({
            ...formulario,
            [name]:value
        })

    }
    return {
        formulario,
        handleChange,
        ...formulario
    }
}
