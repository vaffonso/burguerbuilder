import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component{

  state = {
    showSidedrawer: false
  }

  sideDrawerToggleHandler = () => {
    this.setState( (prevState) => { 
      return { showSidedrawer: !prevState.showSidedrawer } 
    });
  }

  sideDrawerCloseHandler = () => {
    this.setState( {showSidedrawer: false} );
  }

  render () {
    return (
      <Aux>
        <Toolbar 
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
          isAuth={this.props.isAuthenticated}
          open={this.state.showSidedrawer}
          closed={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}
 
export default connect(mapStateToProps)(Layout);