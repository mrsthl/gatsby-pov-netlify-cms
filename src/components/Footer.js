import React from 'react'

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="my-md-5 pt-md-5 border-top">
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">© webTIE.ch</small>
                    </div>

                    <div className="col-6 col-md">
                        <h5>Weitere Links</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/impressum">Impressum</a>
                            </li>
                            <li><a className="text-muted" href="/privacy">Datenschutz</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md">
                        <h5>Kontakt</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/#contact">Kontaktformular</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md">
                        <h5>Anschrift</h5>
                        <ul className="list-unstyled text-small">
                            <p>webTIE.ch<br/>Sven Humbel / Mauro Stehle <br/> Bahnhofstrasse 6a <br/> 5210 Windisch</p>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
};

export default Footer
