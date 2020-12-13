import React from 'react';
import classes from './formsControl.module.css'

export const Textarea = ({input, meta, ...props}) =>{
    const hasError = meta.error && meta.touched; 
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
        
    )
}


export const Input = ({input, meta, ...props}) =>{
    const hasError = meta.error && meta.touched; 
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
        
    )
}