import React,{ createContext, useState} from "react"

export  const datacontext=createContext(null)

const Datapasser=({children})=>{
    const [formdata , setFromdata]=useState({type:"POST", url:""})
    const[paramsdetials , setParamsdetails]=useState([])
    const[headerdetials , setHeaderdetails]=useState([])
    const[jsondata ,setJsondata]=useState('')
    return(
        <datacontext.Provider value={{
            formdata,
            setFromdata,
            paramsdetials,
            setParamsdetails,
            headerdetials,
            setHeaderdetails,
            jsondata,
            setJsondata,
        }}>

         {children}
        </datacontext.Provider>
    )

}
export default Datapasser;