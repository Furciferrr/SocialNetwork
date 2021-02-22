import React from 'react'
import classes from './preloader.module.css'





const Preloader: React.FC = () =>{
    return (
       <div className={classes.wrapperSpin}><div className={classes.ldsRipple}><div></div><div></div></div></div>
    )
}


export default Preloader