import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import {AccountContext} from '../providers/AccountProvider'

const Navbar = () => {
  const {userName} = useContext(AccountContext)
  const {pathname} = useLocation()
  return (
          <Menu>
            <NavLink to="/">
              <Menu.Item active={pathname === '/'}>
                Home
              </Menu.Item>
            </NavLink>
            <NavLink to="/users/new">
              <Menu.Item active={pathname === '/uses/new'}>
                New User
              </Menu.Item>
            </NavLink>
            <NavLink to="/account/profile">
              <Menu.Item active={pathname === '/account/profile'}>
                {userName}
              </Menu.Item>
            </NavLink>
          </Menu> 
      )
    }
export default Navbar;