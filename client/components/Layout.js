import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Layout = () => (
  <MuiThemeProvider>
    <AdminContainer>
    </AdminContainer>
  </MuiThemeProvider>
)

const NavigartionBar = () => {
    const menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/callemall/material-ui',
         text: 'GitHub'
      },
      {
         text: 'Disabled',
         disabled: true
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://www.google.com',
         text: 'Disabled Link',
         disabled: true
      },
    ];
 
    return (
      <div id="page_container">
 
        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={menuItems} />
 
        <header>
          <AppBar title='ZoomFleet' onLeftIconButtonTouchTap={this._handleClick}
            isInitiallyOpen={true}
            />
        </header>
         
      </div>
    );
}

export default Layout