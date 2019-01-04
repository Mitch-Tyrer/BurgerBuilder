import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../UI/Nav/Toolbar/Toolbar';
import SideDrawer from '../UI/Nav/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }

    sideDrawerCloseHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar clicked={this.sideDrawerOpenHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

};

export default Layout;