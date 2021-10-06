import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Erzhan</a>
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <button className=' btn-d'>СБРОСИТЬ ВСЁ</button>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;