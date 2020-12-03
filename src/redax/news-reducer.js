const REPOST = 'REPOST';
const UNREPOST = 'UNREPOST';


let initialState = {
  news: [
    {id:1, repost: true, author: 'Степан Путило', title: 'Жыве Беларусь!', body:'Патриотический лозунг-девиз, направленный на пробуждение национально-гражданских чувств, консолидацию народа Белоруссии на защиту свободы, независимости своей страны, родного языка, всей национальной культуры.', image: 'https://pbs.twimg.com/profile_images/637374236/305341222_400x400.jpg'},
    {id:2, repost:false, author: 'Виктор Бабарико', title: 'Победа близко!', body:'Белорусский банкир, общественный и политический деятель, в 2020 году выдвигавший свою кандидатуру на пост президента Республики Беларусь, политический заключённый, меценат. Задержан 18 июня 2020.', image: 'https://pbs.twimg.com/profile_images/1293684186470125568/_bp0VdeG_400x400.jpg'},
  ]
  
}

const newsPageReducer = (state = initialState, action) => {
  switch(action.type) {
    case REPOST: 
        return {
          ...state,
          news: state.news.map( u => {
            if (u.id === action.userId) {
              return {...u, repost: true}
            }
            return u;
          })
        }
     case UNREPOST:
      return {
        ...state,
        news: state.news.map( u => {
          if (u.id === action.userId) {
            return {...u, repost: false}
          }
          return u;
        })
      }
     default:
        return state;    
  }
}
export const repostAC = (userId) => {
  return(
    {type: REPOST, userId}
  )
} 
export const unrepostAC = (userId) =>{
  return(
    {type: UNREPOST, userId}
  )
}


export default newsPageReducer