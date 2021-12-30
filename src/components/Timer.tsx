import React, { useEffect, useRef, useState } from 'react'

type TimerArgs={
    pasomilisegundos:number,
}

export default function Timer({pasomilisegundos}:TimerArgs) {
    const [segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timeout>()

    useEffect(() => {
        // si ref.current existe entonces limpio el intervalo
        ref.current && clearInterval(ref.current);
        ref.current=setInterval(()=>{
            setSegundos(s=>s+1)
        },pasomilisegundos)
    }, [pasomilisegundos])
    
    return (
        <div>
            <h4>Timer: <small>{segundos}</small></h4>
            
        </div>
    )
}
