import React from 'react';
import classes from './Music.module.css';
import {testAPI} from './../../api/api'


const Music = (props) => {
const getInfoFunc = () => {
 let answer = testAPI.getInfo()
 console.log(answer)

}
    return (
      <div className={classes.music}>
        <button onClick={() => {
          getInfoFunc()
        } }>Push me</button>
        Music 
      </div>
    )
}

export default Music