import { TableRow, TableCell, Checkbox, TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";

const useStyles = makeStyles({
    tablecell: {
        border: " 1px solid rgb(224,224,224,1 );",
        borderCollapse: "collapse",
        padding: ["5px 5px", "!important"]

    },
    textfield:{
        width:"100%",
       
    }

})

const Dynemicrow = ({addrow ,rowid,Data,setData}) => {
    const[checkboxs , setCheckboxs]=useState(false)
    
    const HandleChange=(e)=>{
        let resp=Data.filter(entry => entry.id=== Number(e.target.name))[0];
        if(!checkboxs){
            setCheckboxs(true)
            addrow(oldarray=>[...oldarray , rowid])
            resp={...resp,id:rowid, check:true}
        }else{
            setCheckboxs(false)
            resp={...resp ,id:rowid, check:false}
        }
        let index=Data.findIndex(val=> val.id=== rowid)
        if(index=== -1){
          setData(lastarr=> [...lastarr , resp])
        }else{
           const newarray= Object.assign([...Data],{[index]:resp})
           setData(newarray)
        } 
    }

    const Handletextchange=(e)=>{
        console.log(e.target.value)
        console.log(e.target.name)

        let resp=Data.filter(entry => entry.id===rowid)[0];
        
        resp={...resp ,id:rowid, [e.target.value]:e.target.name}
        let index=Data.findIndex(val=> val.id=== rowid)
        if(index=== -1){
          setData(lastarr=> [...lastarr , resp])
        }else{
           const newarray= Object.assign([...Data],{[index]:resp})
           setData(newarray)
        } 
        console.log(Data)

    }

    const classes = useStyles();
    return (
        <>
            <TableRow>
                <TableCell className={classes.tablecell}>
                    <Checkbox 
                    checked={checkboxs}
                     onChange={(e)=>HandleChange(e)}
                     name={rowid}
                    />
                </TableCell>
                <TableCell className={classes.tablecell}>
                    <TextField  className={classes.textfield}
                      inputProps={{ style :{ height :33 , padding: "3px 4px" }}}
                      onChange={(e)=> Handletextchange(e)}
                      name="key"
                    />
                </TableCell>
                <TableCell className={classes.tablecell}>
                    <TextField  className={classes.textfield}
                     inputProps={{ style :{ height : 33 , padding: "3px 4px" }}}
                     onChange={(e)=> Handletextchange(e)}
                     name="value"
                    />
                </TableCell >
            </TableRow>

        </>

    )
}
export default Dynemicrow;