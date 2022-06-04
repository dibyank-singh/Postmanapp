import React from 'react'
import {makeStyles} from '@mui/styles'
const useStyles=makeStyles({
    Pmanlogo:{
      width:100,
      padding:10,
    }
})

const Header = () => {
    const classes=useStyles();
    
    const url = `https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png`;
    return (
        <>
            <img src={url} alt="postman logo" className={classes.Pmanlogo} />
           
        </>
    )

}

export default Header;