import {ChangeEvent, useState} from 'react';

export default function Formulario() {
    const [formulario, setFormulario] = useState({
        email:'',
        nombre:''
    });

    const handleChange=({target}:ChangeEvent<HTMLInputElement>)=>{
        // lo destructurizo 
        const {name,value}=target;
        setFormulario({
            ...formulario,
            [name]:value
        })

    }
    return (
        <form autoComplete='off'>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="email"
                    className='form-control'
                    // el atributo email es el que va a cambiar en el handleChange, por eso el name='email'

                    name='email'
                    onChange={handleChange}
                    />
            </div>


            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input type="text"
                    className='form-control'
                    // el atributo name es el que va a cambiar en el handleChange
                    name='nombre'
                    onChange={handleChange}
                    />
            </div>
            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
