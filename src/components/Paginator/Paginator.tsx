import React, { useState } from 'react'
import classes from './paginator.module.css'

type Props = {
    usersTotalCount: number
    pageSize: number
    currentPage: number
    onPageChenge: (p: number) => void
}
const Paginator: React.FC<Props> = (props) => {
    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
    let [portionNumber, setPortionNumber] = useState(2)
    let portionSize = 10;
    let leftPortionCount = (portionNumber - 1) * portionSize + 1;
    let rightPortionCount = portionNumber * portionSize;

 

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
            <div className={classes.pageNumber}>
                {portionNumber > 1 &&
                <button onClick={ ()=> {
                    setPortionNumber(portionNumber - 1)
                }  } >Prev</button>}
                {
                    pages.filter( p => p >= leftPortionCount && p <= rightPortionCount).map( p => {
                        return (
                        <span onClick={ (e) => {props.onPageChenge(p)}} className={props.currentPage === p ? classes.activePage : ''}>{p}</span>
                        )
                    })  
                }
                {portionNumber < pagesCount &&
                <button onClick={ ()=> {
                    setPortionNumber(portionNumber + 1)
                }  } >Next</button>}
                
            </div>
           
        )
}

export default Paginator