import axios from "axios"
import {getparamsandheaderdata} from "../utils/utilitsdata"


export const fetchdata=async(formdata,paramsdetials,headerdetials,jsondata)=>{
    const apitype=formdata.type.toLowerCase();
    const apiurl=formdata.url;
    const paramsdata=getparamsandheaderdata(paramsdetials)
    const headerdata=getparamsandheaderdata(headerdetials)
 try{
    return await axios({
       method:apitype,
       url:apiurl,
       body:jsondata,
       headers:headerdata,
       params:paramsdata


   })

 }catch(err){
     console.log("error while fetching fetchdata api", err)

 }

}