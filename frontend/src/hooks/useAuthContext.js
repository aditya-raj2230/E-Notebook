import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext=()=>{
    const context = useContext(AuthContext)

    if(!context){       
         throw Error("use notebook context not set up well")
    }

  

    return context
}
