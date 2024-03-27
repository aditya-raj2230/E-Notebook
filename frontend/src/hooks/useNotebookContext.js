import { NotebookContext } from "../context/notebookContext";
import { useContext } from "react";

export const useNotebookContext=()=>{
    const context = useContext(NotebookContext)

    if(!context){
        throw Error("use notebook context not set up well")
    }

    return context
}