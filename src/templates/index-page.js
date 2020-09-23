import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      subheading,
                                      mainpitch,
                                      description,
                                      intro,
                                  }) => (
    <div>
        <div
            className="full-width-image margin-top-0"
            style={{
                backgroundImage: `url(${
                    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    height: '150px',
                    lineHeight: '1',
                    justifyContent: 'space-around',
                    alignItems: 'left',
                    flexDirection: 'column',
                }}
            >
                <h3
                    className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                    style={{
                        color: '#f79f24',
                        textAlign: 'center',
                        letterSpacing: '4px',
                        padding: '0.25em',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                    }}
                >
                    {subheading}
                </h3>
                <h1
                    className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                        color: 'white',
                        fontSize: '40px',
                        letterSpacing: '3px',
                        fontWeight: 700,
                        padding: '0.25em',
                    }}
                >
                    {title}
                </h1>

                <p style={{
                    textAlign: 'center',
                    margin: '30px'
                }}><a href="#" className="btn btn-primary" style={{
                    background: '#f79f24',
                    borderShadow: 'none',
                    color: '#fff'
                }}>Prenez rendez-vous maintenant</a></p>
            </div>
        </div>
        <nav className="level is-mobile" style={{backgroundColor: "#000000", color: "white", paddingTop: '50px', paddingBottom: '50px'}}>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Années d'expériences</p>
                    <p className="title" style={{ color: "#f79f24"}}>22</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Projets finis</p>
                    <p className="title" style={{ color: "#f79f24"}}>4200</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Clients satisfait</p>
                    <p className="title" style={{ color: "#f79f24"}}>2348</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Voitures vendus</p>
                    <p className="title" style={{ color: "#f79f24"}}>3209</p>
                </div>
            </div>
        </nav>
        <section className="section section--gradient">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="content">
                                    <div className="columns is-gapless">
                                        <div className="column">
                                            <figure className="image">
                                                <img src="/img/about.jpg"
                                                     alt="Image"/>
                                            </figure>
                                        </div>
                                        <div className="column">
                                            <h1 className="title">{mainpitch.title}</h1>
                                            <h1 className="title">{mainpitch.subtitle}</h1>
                                            <p>
                                                {mainpitch.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-12">
                                        <span style={{
                                            fontSize: '12px',
                                            display: 'block',
                                            fontWeight: 700,
                                            color: '#f79f24',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px',
                                            textAlign: 'center'
                                        }}>
                                            {heading}
                                        </span>
                                        <span style={{textAlign: 'center'}}>
                                            <h2 stlyle={{
                                                fontSize: '24px',
                                                fontWeight: 700,

                                            }}>{description}</h2>
                                        </span>

                                    </div>
                                </div>
                                <Features gridItems={intro.blurbs}/>
                                <div className="columns">
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn btn-primary" style={{
                                            background: '#f79f24',
                                            borderShadow: 'none',
                                            color: '#fff'
                                        }} to="/products">
                                            Voir le détails de nos offres
                                        </Link>
                                    </div>
                                </div>
                                <div className="column is-12">
                                    <div className="columns is-gapless">
                                        <div className="column">
                                            <span style={{
                                                fontSize: '12px',
                                                display: 'block',
                                                fontWeight: 700,
                                                color: '#f79f24',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                textAlign: 'center'
                                            }}>
                                            Demandez un rendez-vous
                                        </span>
                                            <span style={{textAlign: 'center'}}>
                                            <h2 stlyle={{
                                                fontSize: '24px',
                                                fontWeight: 700,

                                            }}>Nos consultations sont gratuites !</h2>
                                        </span>
                                            <figure className="image">
                                                <img src="/img/work-3.jpg"
                                                     alt="Image"/>
                                            </figure>
                                        </div>
                                        <div className="column">
                                            <form name="contact" action="/contact/thanks" method="post"
                                                  data-netlify="true"
                                                  data-netlify-honeypot="bot-field">
                                                <input type="hidden" name="bot-field"/>
                                                <input type="hidden" name="form-name" value="contact"/>

                                                <div className="field">
                                                    <label className="label">Nom</label>
                                                    <div className="control">
                                                        <input className="input" type="text" name="nom"
                                                               placeholder="Nom"/>
                                                    </div>
                                                </div>

                                                <div className="field">
                                                    <label className="label">Email</label>
                                                    <div className="control">
                                                        <input className="input" type="email" name="email"
                                                               placeholder="Email"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="field">
                                                    <label className="label">Téléphone</label>
                                                    <div className="control">
                                                        <input className="input" type="text" name="tel"
                                                               placeholder="Téléphone"/>
                                                    </div>
                                                </div>

                                                <div className="field">
                                                    <label className="label">Message</label>
                                                    <div className="control">
                                                <textarea className="textarea" name="message"
                                                          placeholder="Message"/>
                                                    </div>
                                                </div>

                                                <div className="field">
                                                    <input className="btn btn-primary" type="submit" style={{
                                                        background: '#f79f24',
                                                        borderShadow: 'none',
                                                        color: '#fff',
                                                        cursor: 'pointer'
                                                    }} value="Envoyer"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                                <div className="column is-12">
                                    <h3 className="has-text-weight-semibold is-size-2">
                                        News
                                    </h3>
                                    <BlogRoll/>
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/blog">
                                            Voir plus
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
}

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
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
        markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                subheading
                mainpitch {
                    title
                    description
                }
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        text
                    }
                    heading
                    description
                }
            }
        }
    }
`
