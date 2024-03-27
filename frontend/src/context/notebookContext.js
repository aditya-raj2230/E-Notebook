import { createContext, useReducer } from "react";


export const NotebookContext = createContext()

export const notebookReducer=(state,action)=>{
    switch(action.type){
        case 'SET_NOTEBOOK':
                    return{
                notebooks:action.payload
            }
        case 'CREATE_NOTEBOOK':
                return{
            notebooks:[action.payload,...state.notebooks]
        }
        default:
            return state
    }

}

export const NotebookContextProvider=({children})=>{
    const [state,dispatch]=useReducer(notebookReducer,{notebook:null})

    

    return(
        <NotebookContext.Provider value={{...state,dispatch}}>
            {children}
        </NotebookContext.Provider>
    )
}