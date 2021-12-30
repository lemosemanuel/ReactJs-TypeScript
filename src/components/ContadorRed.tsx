import { useReducer } from "react";


const initialState={
    contador:10,  
}
// tengo que decirle que acciones puede tomar ese useReducer
type ActionType=
            | {type:'incrementar'}
            | {type:'custom',payload:number}
            | {type:'decrementar'};


const contadorReducer= (state: typeof initialState, action:ActionType)=>{
    // usualmente los reducer trabajan con un switch
    switch(action.type){
        case 'incrementar':
            // siempre se retorna un nuevo state , no se muta nunca
            return {
                // regreso una copia del state
                ...state,
                contador:state.contador + 1
            }
        case 'decrementar':
            return{
                // regreso una copia del state
                ...state,
                contador:state.contador -1
            }
        case 'custom':
                return{
                    ...state,
                    // busco el payload que esta en el action
                    contador:action.payload
                }
        default:
            return state;
    }
}

export const ContadorRed = () => {
    const [contadorState, dispatch] = useReducer(contadorReducer, initialState);
    return (
        <div>
            <h2>Contador: {contadorState.contador}</h2>
            <button className="btn btn-outline-primary"
                onClick={()=>dispatch({type:'incrementar'})}>
                +1
            </button>
            <button className="btn btn-outline-primary"
                onClick={()=>dispatch({type:'decrementar'})}>
                -1
            </button>
            <button className="btn btn-outline-primary"
                onClick={()=>dispatch({type:'custom',payload:100})}>
                100
            </button>
        </div>
    )
}
