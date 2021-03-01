import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { Col, Row, Layout, Button, Menu, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth, getLogin } from '../../redax/selectors';
import { logoutUserThunk } from '../../redax/auth-reducer';


export type PropsHeaderType = {
  toggle: () => void
}


export const Header: React.FC<PropsHeaderType> = (props) => {
  const { Header } = Layout;

  const [collapsed, setCollapsed] = useState(true)

  const isAuth = useSelector(getIsAuth)
  const login = useSelector(getLogin)

  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logoutUserThunk())
  }


  const toggle = () => {
    setCollapsed(!collapsed)
    props.toggle()
  }

  const menu = (
    <Menu>
      <Menu.Item danger>
       <span onClick={logoutCallback}>Log Out</span>
      </Menu.Item>
    </Menu>)

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Row>
        <Col span={16}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            style: { fontSize: '28px', color: 'white', marginLeft: '35px' },
            onClick: toggle,
          })}
        </Col>

        {isAuth ?
          <>
            <Col span={8}>
              <Dropdown overlay={menu} placement="bottomCenter">
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </a>
              </Dropdown>
              <span style={{ color: "white", margin: '10px' }} >{login}</span>
            </Col>
          </>
          : <Col span={6}> <NavLink to='/login'>Login</NavLink> </Col>}

      </Row>
    </Header>






    /* <header className={classes.header}>
        <img alt="header" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png'/>
        <div className={classes.login}>
        {props.isAuth ? 
        <div>{props.login} -<button onClick={props.logoutUserThunk}>Log Out</button></div> :
         <NavLink to='/login'>Login</NavLink>}
          </div>  
    </header> */
  )
}
