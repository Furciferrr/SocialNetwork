import { connect } from 'react-redux'
import { repostAC, unrepostAC } from '../../redax/news-reducer'
import News from './News'

const mapStateToProps = (state) =>{
  return {
    news: state.newsPage.news
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    repost: () =>{
      dispatch(repostAC)
    } ,
    unrepost: () => {
      dispatch(unrepostAC)
    }
  }
}


const ContainerNews = connect(mapStateToProps, mapDispatchToProps) (News)
export default ContainerNews