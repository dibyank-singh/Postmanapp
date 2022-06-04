
const checkjsondata = (text) => {
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
     
            return true;
    }
    else{
        return false;
    }


}


export const checkvalidation = (formdata, paramsdetials, headerdetials, jsondata,setShowerror) => {
    if (!formdata.url) {
        setShowerror("URL is missing :)")
        return false;
    }

    if (!checkjsondata(jsondata)) {
        setShowerror("Invaild Json data")
        return false;
    }
    return true;
}

export const getparamsandheaderdata=(dataobj)=>{
    
    let obj={}
   console.log(dataobj)
    
   dataobj.forEach(data=>{
    if(data.hasOwnProperty("check") && data.check){
        console.log(data.check)
        obj={ ...obj , [data.key]:data.value}
        console.log(data)
    }
     
   })
   return obj;
   
 

}