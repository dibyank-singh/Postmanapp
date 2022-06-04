import { Typography, Box, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import Dynemicrow from './Dynemicrow';


const useStyles=makeStyles({
  tablecell:{
     border:" 1px solid rgb(224,224,224,1 );",
     borderCollapse:"collapse",
     padding:["5px 5px", "!important"]
     
  }

})

const Tabletab = ({ text, Data , setData }) => {

  const[row , setAddrow]=useState([0])
  const classes=useStyles();
  return (
    <Box>
      <Typography mt={2} > {text} </Typography>

      <Table sx={{ minWidth: "100%" , border: " 1px solid rgb(224,224,224,1 );" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablecell}></TableCell>
            <TableCell className={classes.tablecell} >KEY</TableCell>
            <TableCell className={classes.tablecell} >VALUE</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {
          row.map((val , index)=>(
            <Dynemicrow
             addrow={setAddrow}
             rowid={index}
             key={index}
             Data={Data}
             setData={setData}
            />
          ))
        }
        </TableBody>
      </Table>

    </Box>
  )
}

export default Tabletab;