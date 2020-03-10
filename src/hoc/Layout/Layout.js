import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

const layout = props => {

  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  }

  const sideDrawerCloseHandler = () => {
    setSideDrawerIsVisible(false);
  }

  return (
    <Aux>
      <Toolbar 
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}/>
      <SideDrawer 
        isAuth={props.isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerCloseHandler}/>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );

};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}
 
export default connect(mapStateToProps)(layout);