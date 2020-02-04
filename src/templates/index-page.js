import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
                                      image,
                                      title,
                                      quoteHeading,
                                      quoteText,
                                  }) => (
    <div>
        <img src={
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        } width={"100%"}/>
        <div className="container-fluid">
            <section className="page-section" id="intro">
                <div className="page-title col-lg-12 text-center">
                    <h1 id="webTIE" className="page-heading text-uppercase">{title}</h1>
                </div>
                <div className="container content">
                    <div className="container">
                        <div className="row">
                            <div className="container">
                                <blockquote className="quote-card">
                                    <p>
                                        {quoteHeading}
                                    </p>

                                    <cite>
                                        {quoteText}
                                    </cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
);

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    quoteHeading: PropTypes.string,
    quoteText: PropTypes.string,
};

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                quoteHeading={frontmatter.quoteHeading}
                quoteText={frontmatter.quoteText}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quoteHeading
        quoteText
      }
    }
  }
`
