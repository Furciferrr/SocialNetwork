import React from 'react';
import classes from './News.module.css';



const News = (props) => {

  let newsElem = props.news.map( n => {
    return (
      <div className={classes.news} key={n.id}>
        <img src={n.image} alt="newsimg"/>
        <h3>{n.title}</h3>
        <div>{n.body}</div>
        <div className={classes.clear}></div>
        <div>{n.author}</div>
      </div>
    )
  })
    return (
      <div>
        { newsElem }
      </div>
     
    )
}

export default News