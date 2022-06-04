import React from 'react'
import{ Snackbar} from "@mui/material";

const SnackBar = ({error ,setError,showerror}) => {
    const handleClose=()=>{
      setError(false)
    }
    return (
        <>
            <Snackbar
                open={error}
                autoHideDuration={3000}
                onClose={handleClose}
                message={showerror}
               
            />
        </>
    )
}

export default SnackBar;