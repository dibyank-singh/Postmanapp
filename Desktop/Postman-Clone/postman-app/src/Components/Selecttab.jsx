import { Box, Tabs, Tab } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Tabletab from './Childtabs/Tabletab';
import { useState ,useContext } from 'react'
import Bodytext from './Bodytext';
import { datacontext } from './contextApi/Datapasser';

const useStyles=makeStyles({
mainbox:{
    marginTop:6,
},
tabstyle:{
    textTransform:["none" , "!important"]
}

})

const Selecttab = () => {

    const classes=useStyles();
    const {paramsdetials , setParamsdetails ,headerdetials , setHeaderdetails}=useContext(datacontext)
       
    const[value , setValue]=useState(0);

    const handleChange=(event , newValue)=>{

        setValue(newValue)
    }

    return (
        <>
            <Box className={classes.mainbox}>
                <Tabs value={value} onChange={handleChange}
                TabIndicatorProps={{sx: {backgroundColor:"#F26B3A" , height:4}}}
                textColor="none"
                >
                    <Tab label="Params" className={classes.tabstyle} />
                    <Tab label="Headers" className={classes.tabstyle}/>
                    <Tab label="Body" className={classes.tabstyle}/>
                </Tabs>

                <Box
                    role="tabpanel"
                    hidden={value !== 0}
                    id={`simple-tabpanel-${0}`}
                    aria-labelledby={`simple-tab-${0}`}
                   
                >
                  <Tabletab text={"Quary Params"}
                   Data={paramsdetials}
                   setData={setParamsdetails}
                  />
                </Box>
                <Box
                    role="tabpanel"
                    hidden={value !== 1}
                    id={`simple-tabpanel-${1}`}
                    aria-labelledby={`simple-tab-${1}`}
                   
                >
                <Tabletab text={"Headers"}
                Data={headerdetials}
                setData={setHeaderdetails}
                />
                </Box>
                <Box
                    role="tabpanel"
                    hidden={value !== 2}
                    id={`simple-tabpanel-${2}`}
                    aria-labelledby={`simple-tab-${2}`}
                   
                >
                <Bodytext/>
                </Box>

            </Box>
        </>
    )

}

export default  Selecttab;