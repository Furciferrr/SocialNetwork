import './App.css';
import React from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ContainerNews from './components/News/conteinerNews';
import Music from './components/Music/Music';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import { Link, NavLink, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import ProfileContainerConnect from './components/Content/ProfileContainer'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeAppThunk } from './redax/app-reducer';
import Preloader from './components/common/preloader/preloader';
import withSuspense from './components/hoc/withSuspense';
import { AppStateType } from './redax/redux-store';
import 'antd/dist/antd.css'

import {Layout, Menu} from 'antd';
import {
  UserOutlined,
  MessageOutlined,
  TeamOutlined,
  SearchOutlined,
  ToolOutlined, 
  CaretRightOutlined,
  GlobalOutlined

} from '@ant-design/icons';
import { Header } from './components/Header/Header';
import { ErrorPage } from './components/common/ErrorPages/errorPage';

const {  Sider, Content } = Layout;

const UsersPage = React.lazy(() => import('./components/Users/UsersPage'));
const ChatPage = React.lazy(() => import('./Pages/Chat/ChatPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeAppThunk: () => void
}

type MyState = { collapsed: boolean };

const SuspendedDialogs = withSuspense(UsersPage);
const SuspendedChat = withSuspense(ChatPage);

class App extends React.Component<MapPropsType & DispatchPropsType, MyState>{

  constructor(props: MapPropsType & DispatchPropsType) {
    super(props);
    this.state = { collapsed: document.documentElement.scrollWidth < 800 ? true : false };

  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    this.props.initializeAppThunk()
  }


  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <Layout >
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} collapsedWidth={80}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to='/profile'>Profile</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<MessageOutlined />}>
              <NavLink to='/dialogs'>Messages</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<SearchOutlined />}>
              <NavLink to='/users'>Find Friends</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />}>
              <Link to='/chat'>Chat</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<ToolOutlined />}>
              <Link to='/settings'>Settings</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<CaretRightOutlined />}>
              <Link to='/music'>Music</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<GlobalOutlined />}>
              <Link to='/news'>News</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">

          <Header toggle={this.toggle}/>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainerConnect />} />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/news" render={() => <ContainerNews />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/users" render={() => <SuspendedDialogs />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="/chat" render={() => <SuspendedChat />} />
              <Route path="*" render={() => <ErrorPage/>} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
      




      /*  <div className="app-wrapper">
         <HeaderContainer/>
         <Nav bestFriends={this.props.bestFriends}/>
         <div className='app-wrapper-content'>
           <Switch>
             <Route exact path="/" render={ () => <Redirect to={'/profile'}/> }/>
             <Route path="/profile/:userId?" render={ () => <ProfileContainerConnect/>}/>
             <Route path="/dialogs" render={ () => <DialogsContainer/>}/> 
             <Route path="/news" render={ () => <ContainerNews/>}/>
             <Route path="/music" render={ () => <Music/>}/> 
             <Route path="/settings" render={ () => <Settings/>}/> 
             <Route path="/users" render={()=> <SuspendedDialogs/> }/> 
             <Route path="/login" render={ () => <Login/>}/>
             <Route path="*" render={ () => <div>404 NOT FOUND</div>}/>
           </Switch> 
         </div>
       </div> */
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.inizialized,
  bestFriends: state.bestFriends
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, { initializeAppThunk }),
  withRouter)(App)
