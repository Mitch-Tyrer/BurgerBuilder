import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo />
        <div>MENU</div>
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;