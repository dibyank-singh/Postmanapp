import { createContext, useContext } from "react"
import { Box, Typography ,TextareaAutosize} from "@mui/material"
import { datacontext } from "./contextApi/Datapasser"

const textarea={
width: "100%",
padding: 12,
background: `url(http://i.imgur.com/2cOaJ.png)`,
backgroundRepeat:"no-repeat ",
paddingLeft:35,
borderColor:"#706f6f"
}
const Bodytext = () => {
    const{setJsondata}=useContext(datacontext)
    const Handlechange=(e)=>{
     setJsondata(e.target.value)
    }
    
    return (
        <>
            <Box>
                <Typography mt={2}>
                    JSON
                </Typography>
                <TextareaAutosize
                minRows={4}
                maxRows={6}
                style={textarea}
                onChange={(e)=>Handlechange(e)}
                  
                />

            </Box>
        </>
    )
}

export default Bodytext