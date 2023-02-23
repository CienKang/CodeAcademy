import React from 'react';

import './Header.css';
const Header = (): JSX.Element => {
    return (
        <header>
            <div className="name-div outer-margin-left-15">
                <h2>The Artifact</h2>
                <h1><i>Culture & Art Blog</i></h1>
            </div>

            <div className="link-bar-div">
                <span>Blog</span>
                <span>About</span>
                <span>Contact</span>
            </div>
        </header>
    );
};

export default Header;