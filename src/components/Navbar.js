import React from 'react'
import {Link} from 'gatsby'

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }

    render() {
        return (
            <nav className={"navbar navbar-expand-lg navbar-light"} style={{backgroundColor: "#F5F5F5"}} id={"mainNav"}>
                <a className="navbar-brand" href="/">
                    <img src="img/webTIE.png" className="d-inline-block align-top" width="200px"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/services"}>Lösungen </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/about"}>Über uns</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/contact"}>Kontakt </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Navbar
