import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand d-flex flex-row align-items-center" href="#">
                        <i className="fa fa-2x fa-home mr-2" aria-hidden="true"></i>
                        <h3 className="mb-0">FIAP ANDAR</h3>
                    </a>
                </nav>
            </header>
        );
    }
}

export default Header;