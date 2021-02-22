import React from 'react';
import classes from './Post.module.css';

type  propsPostType = {
    message: string
    key: number
    likenumb: number
    avalink: string
}

const Post: React.FC<propsPostType> = (props) => {
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