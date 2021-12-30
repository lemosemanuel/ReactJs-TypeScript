import React, { useState } from 'react'
// una interface son como reglas que le podemos poner a los objetos
interface User{
    uid:string;
    name:string;
}

export default function Usuario() {
    const [user, setUser] = useState<User>();
    const login=()=>{
        setUser({
            uid:'ABC123',
            name:'emanuel'
        })
    }
    return (
        <div className='mt-5 '>
            <h3>usuario: useState</h3>
            <button 
            onClick={()=>login( )}
            className='btn btn-outline-primary'>
                Login
            </button>
            {
                (!user)
                ? <pre>No hay usuario</pre>
                :<pre>{JSON.stringify(user)}</pre>
        
            }
        </div>
    )
}
