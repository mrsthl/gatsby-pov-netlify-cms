import React from 'react'
import {navigate} from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isValidated: false}
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => alert(error))
    }

    render() {
        return (
            <Layout>
                <div className="container-fluid">
                    <section className="page-section" id="contact">
                        <div className="page-title col-lg-12 text-center">
                            <h1 id="contact-title" className="page-heading text-uppercase">Kontakt</h1>
                        </div>

                        <div className="container content">
                            <div className="page-title col-lg-12 text-center">
                                <h2 className="page-heading">Nehmen Sie Kontakt mit uns auf</h2>
                            </div>

                            <form
                                name="contact"
                                method="post"
                                action="/contact/thanks/"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={this.handleSubmit}
                            >
                                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                <input type="hidden" name="form-name" value="contact"/>
                                <div hidden>
                                    <label>
                                        Don’t fill this out:{' '}
                                        <input name="bot-field" onChange={this.handleChange}/>
                                    </label>
                                </div>


                                <div className="controls">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_name">Vorname *</label>
                                                <input id="form_name" type="text" name="name" className="form-control"
                                                       placeholder="Bitte geben Sie Ihren Vorname ein"
                                                       required="required"
                                                       data-error="Vorname ist erforderlich"
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_surname">Nachname *</label>
                                                <input id="form_surname" type="text" name="surname"
                                                       className="form-control"
                                                       placeholder="Bitte geben Sie Ihren Vorname ein"
                                                       required="required"
                                                       data-error="Nachname ist erforderlich."
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_email">Email *</label>
                                                <input id="form_email" type="email" name="email"
                                                       className="form-control"
                                                       placeholder="Bitte geben Sie Ihre Email-Adresse ein"
                                                       required="required"
                                                       data-error="Email ist erforderlich."
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_subject">Betreff</label>
                                                <input id="form_subject" type="text" name="subject"
                                                       className="form-control"
                                                       placeholder="Bitte geben Sie einen Betreff ein"
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="form_message">Nachricht *</label>
                                            <input id="form_message" name="message" className="form-control"
                                                   placeholder="Geben Sie Ihre Nachricht ein" rows="4"
                                                   required="required"
                                                   data-error="Bitte geben Sie eine Nachricht ein."
                                                   onChange={this.handleChange}/>

                                            <p className="text-muted">* Diese Felder sind Pflichtfelder</p>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <div className="col-md-12">
                                        <input type="submit" className="btn btn-success btn-send" id="submit_form"
                                               value="Nachricht senden"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}
