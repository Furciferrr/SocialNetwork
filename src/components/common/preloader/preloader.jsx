import React from 'react'
import classes from './preloader.module.css'





const Preloader = (props) =>{
    return (
       <div className={classes.wrapperSpin}><div className={classes.ldsRipple}><div></div><div></div></div></div>
    )
}


export default Preloader