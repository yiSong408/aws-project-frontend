import React from 'react';

function Header(props) {
    return (
        <div>
            <nav className={''}>
                <a href={'/home'}>home</a>
                <a href={'/comment'}>comment</a>
            </nav>
        </div>
    );
}

export default Header;
