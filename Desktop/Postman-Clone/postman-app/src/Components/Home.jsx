import React, { useContext,useState } from 'react'
import Header from './Header'
import Formpage from './Formpage'
import  Selecttab from './Selecttab'
import SnackBar from "./SnackBar"
import ErrorScreen from "../ErrorScreen"
import Response from "../Response"
import {Box} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { datacontext } from './contextApi/Datapasser'
import {checkvalidation} from "../utils/utilitsdata" 
import { fetchdata } from '../Apiservice/Api'

const useStyles=makeStyles({
Box:{
  width:'60%',
  margin: '15px auto 0 auto'
}
})

const Home = () => {
  const classes=useStyles()
  const[error , setError]=useState(false)
  const[showerror , setShowerror]=useState('')
  const [errmsg ,setErrmsg]=useState(false)
  const[apiresp , setApiresp]=useState({})
  const{formdata,paramsdetials,headerdetials,jsondata}=useContext(datacontext)

  const Onvaluesend=async()=>{
    console.log("hello ")
    if(!checkvalidation(formdata,paramsdetials,headerdetials,jsondata,setShowerror)){
      setError(true)
      console.log(error)
      return false;
    }
     const response= await fetchdata(formdata,paramsdetials,headerdetials,jsondata)
     console.log(response)
     if(!response){
       setErrmsg(true)
       return

     }
     setErrmsg(false)
     setApiresp(response.data)
  }
  return (
    <>
      <Header/> 
      <Box className={classes.Box}>
      <Formpage Onvaluesend={Onvaluesend}/>
      <Selecttab/>
    {errmsg ? <ErrorScreen/> : <Response data={apiresp}/>}
      { error && <SnackBar error={error} setError={setError} showerror={showerror}/>}
      </Box>


    </>
  )
}

export default Home