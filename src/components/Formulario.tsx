import {useForm} from '../hooks/useForm';
// import {ChangeEvent, useState} from 'react';

// buenas practicas de typescript , decir que tipo de dato voy a traer en mi hook
interface FormData{
    email: string;
    nombre: string;
    edad?: number;
}

export default function Formulario() {

    // convierto todo esto de abajo en un hook
    // const [formulario, setFormulario] = useState({
    //     email:'',
    //     nombre:''
    // });

    // const handleChange=({target}:ChangeEvent<HTMLInputElement>)=>{
    //     // lo destructurizo 
    //     const {name,value}=target;
    //     setFormulario({
    //         ...formulario,
    //         [name]:value
    //     })

    // }

    // llamo el hook
    const {nombre,edad,email,formulario,handleChange}=useForm<FormData>({
        email:'ema@gmail.com',
        nombre:'emanuel'
    })
    // const {email,nombre}=formulario;
    return (
        <form autoComplete='off'>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="email"
                    className='form-control'
                    // el atributo email es el que va a cambiar en el handleChange, por eso el name='email'
                    value={email}
                    name='email'
                    onChange={handleChange}
                    />
            </div>


            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input type="text"
                    className='form-control'
                    // el atributo name es el que va a cambiar en el handleChange
                    value={nombre}
                    name='nombre'
                    onChange={handleChange}
                    />
            </div>
            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
