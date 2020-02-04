import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
      <div className="container-fluid">
        <section className="page-section" id="services">
          <div className="page-title col-lg-12 text-center">
            <h1 id="services_title" className="page-heading text-uppercase">Lösungen</h1>
          </div>
          <div className="container content">
            <div className="page-title col-lg-12 text-center">
              <h2 className="page-heading text-uppercase">Für wen?</h2>
            </div>

            <div className="row text-center">
              <div className="col-md-4 icons">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"/>
                        <i className="fas fa-building fa-stack-1x fa-inverse"/>
                    </span>

                <div className="service-description">
                  <h4 className="service-heading">KMU</h4>

                  <p className="text-muted">Wir bieten, auf Ihr Unternehmen <b>massgeschneiderte Webauftritte</b>, zu
                    einem gutem Preis. Natürlich mit Unterstützung für Mobile Clients und Google-Optimierung.
                  </p>
                </div>
              </div>

              <div className="col-md-4 icons">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary circle-icon"/>
                        <i className="fas fa-school fa-stack-1x fa-inverse"/>
                    </span>

                <div className="service-description">
                  <h4 className="service-heading">Schulen</h4>

                  <p className="text-muted">Auch Schulen müssen heutzutage <b>im Internet präsent</b> sein und
                    Informationen für Eltern, Schüler und Lehrer übersichtlich bereitstellen. Wir erarbeiten mit Ihnen
                    eine passende Lösung.
                  </p>
                </div>
              </div>

              <div className="col-md-4 icons">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"/>
                        <i className="fas fa-child fa-stack-1x fa-inverse"/>
                    </span>

                <div className="service-description">
                  <h4 className="service-heading">Spielgruppen</h4>

                  <p className="text-muted">Mit einer modernen Webseite und unserer geschickten Integration
                    für <b>Onlineanmeldungen</b> reduzieren Sie den Bürokratieaufwand für Sie und Ihre Kunden.
                  </p>
                </div>
              </div>
            </div>

            <div className="page-title col-lg-12 text-center">
              <h2 className="page-heading text-uppercase">Technologien</h2>
            </div>

            <div className="row text-center">
              <div className="col-md-4 icons">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"/>
                        <i className="fab fa-wordpress-simple fa-stack-1x fa-inverse"/>
                    </span>

                <div className="service-description">
                  <h4 className="service-heading">Wordpress</h4>

                  <p className="text-muted">Für einfache Webauftritte setzten wir auf das Web-Framework Wordpress. Es
                    ermöglicht einen schnelle und effiziente Entwicklung und der Content auf der Seite kann vom Kunden
                    selbst verwaltet werden.</p>
                </div>
              </div>

              <div className="col-md-4 icons">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary circle-icon"/>
                        <i className="fab fa-html5 fa-stack-1x fa-inverse"/>
                    </span>

                <div className="service-description">
                  <h4 className="service-heading">Webtechnologien</h4>

                  <p className="text-muted">Wie für das Web üblich, verwenden wir für beinahe alle Projekte HTML, CSS
                    und JavaScript.</p>
                </div>
              </div>

              <div className="col-md-4 icons">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"/>
                        <i className="fab fa-react fa-stack-1x fa-inverse"/>
                    </span>

                <div className="service-description">
                  <h4 className="service-heading">Individuelle Lösungen</h4>

                  <p className="text-muted">Für grössere Projekte, individuelle Lösungen und Single-Page-Applications,
                    sind wir gerne bereit auch weitere Technologien wie Java, Python, C#, React etc einzusetzen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
