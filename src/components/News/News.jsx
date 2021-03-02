import React, { useEffect, useRef, useState } from 'react';
import classes from './News.module.css';



const News = (props) => {

  const but = useRef()

  useEffect(()=>{
    but.current.addEventListener('click', ()=>{
      console.log('clicked me')
    })
  },[])




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
        <button ref={but}>push</button>
        <EffectsDemoNoDependency/>
      </div>
     
    )
}

function EffectsDemoNoDependency() {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();
  useEffect(() => {
    console.log("useEffect");
    document.title = title;
  },[]);
  const handleClick = () => setTitle(titleRef.current.value);
  console.log("render");
  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}
export default News