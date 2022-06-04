import { Box , Select, MenuItem ,TextField, Button} from '@mui/material';
import React, { useContext, useState } from 'react'
import { datacontext } from './contextApi/Datapasser';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    box:{
        display:"flex"
    },
    select:{
        width:130,
        height:40,
    },
    Textfield:{
        width:"100%",
        height:50, 
        // backgroundColor:'#fafcfb',
    },
    Button:{
        width:100,
        height:40,
        marginLeft:[6,'!important']

    }
})

const Formpage = ({Onvaluesend}) => {

    const classes=useStyles();

    const {formdata , setFromdata}=useContext(datacontext)
    console.log(formdata)
    const[age , setAge]=useState('')

    const handleChange=(e)=>{
      setFromdata({...formdata , type:e.target.value})
    }
    const handleurlChange=(e)=>{
      setFromdata({...formdata , url:e.target.value})
      console.log(formdata)
    }
    return (
        <Box className={classes.box}>
            <Select
               
                value={formdata.type}
                label="Age"
                onChange={(e)=>handleChange(e)}
                className={classes.select}
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
               
            </Select>
            <TextField
            size='small'
            className={classes.Textfield}
            onChange={(e)=>handleurlChange(e)}
            
            />
        <Button
        variant='contained'
        className={classes.Button}
        onClick={()=>Onvaluesend()}
        
        >
         Send
        </Button>
        </Box>
    )
}

export default Formpage;