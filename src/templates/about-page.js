import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
      <div className="container-fluid">
        <section className="page-section" id="team">
          <div className="page-title col-lg-12 text-center">
            <h1 id="about" className="page-heading text-uppercase">Über uns</h1>
          </div>
          <div className="container content">
            <div className="page-title col-lg-12 text-center">
              <h2 className="page-heading text-uppercase">Unser Team</h2>
            </div>

            <div className="row text-center">
              <div className="team-member">
                <img src="img/mauro_webTIE.jpg" className="mx-auto rounded-circle"/>
                <h4>Mauro Stehle</h4>

                <p className="text-muted">Gründer und Entwickler</p>
              </div>

              <div className="team-member">
                <img src="img/sven_webTIE.jpg" className="mx-auto rounded-circle"/>
                <h4>Sven Humbel</h4>

                <p className="text-muted">Gründer und Entwickler</p>
              </div>
            </div>

            <div className="page-title col-lg-12 text-center">
              <h2 className="page-heading text-uppercase">Gründung</h2>
            </div>

            <p className="text-muted">
              webTIE wurde ursprünglich von den 2 Studenten Mauro und Sven der ABB Technikerschule, später der FHNW
              Brugg-Windisch,
              gegründet um gemeinsam private Anfragen für Webseitenprojekte umzusetzen. <br /> Mit den Weiterempfehlungen
              unserer Kunden konnten wir ohne Werbung und Marketing diverse Kundenaufträge erfolgreich umsetzen. Durch
              die wachsende Anzahl der zu verwaltenden und zu betreuenden Projekte, stiegen auch die Anforderungen und
              wir investierten in Infrastruktur und intelligente Backuplösungen.<br /> Somit sind wir heute gut gerüstet
                und
                können umfassende Komplettlösungen anbieten, welche von der Erstellung einer Webapplikation, über das
                Hosting der Applikation bis zu deren Wartung führt.</p>
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
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
