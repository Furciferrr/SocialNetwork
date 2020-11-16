import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.post}>
            <img alt='ava' src={props.avalink}/>
            {props.message}
            <div>Like
                <span>  </span>   
                <span>{props.likenumb}</span>
            </div>
        </div>
    )
}

export default Post