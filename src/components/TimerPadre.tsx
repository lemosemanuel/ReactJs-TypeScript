import React, { useState } from 'react'
import Timer from './Timer';

export default function TimerPadre() {
    const [millisegundos, setMillisegundos] = useState(1000);
    return (
        <div>
            <span>Milisegundos {millisegundos}</span>
            <br />
            <button 
            onClick={()=>setMillisegundos(1000)}
            className='btn btn-outline-success'>
                1000
            </button>
            <button 
            onClick={()=>setMillisegundos(2000)}
            className='btn btn-outline-success'>
                2000
            </button>
            <Timer pasomilisegundos={millisegundos}></Timer>
        </div>
    )
}
