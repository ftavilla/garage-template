import React from 'react'
import {Link} from 'gatsby'
import facebook from "../img/social/facebook.svg"
import twitter from "../img/social/twitter.svg"
import instagram from "../img/social/instagram.svg"

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <span className="logo">AUTOREPAIR.</span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/about">
                    Qui sommes-nous ?
                </Link>
                <Link className="navbar-item" to="/products">
                    Nos services
                </Link>
                <Link className="navbar-item" to="/blog">
                    Nos véhicules
                </Link>
                <Link className="navbar-item" to="/contact">
                    Nous contacter
                </Link>
            </div>
              <div className="navbar-end has-text-centered">
                  <a title="facebook" className="navbar-item" href="https://facebook.com">
                      <img
                          src={facebook}
                          alt="Facebook"
                          style={{width: '1em', height: '1em'}}
                      />
                  </a>
                  <a title="twitter" className="navbar-item" href="https://twitter.com">
                      <img
                          className="fas fa-lg"
                          src={twitter}
                          alt="Twitter"
                          style={{width: '1em', height: '1em'}}
                      />
                  </a>
                  <a title="instagram" className="navbar-item" href="https://instagram.com">
                      <img
                          src={instagram}
                          alt="Instagram"
                          style={{width: '1em', height: '1em'}}
                      />
                  </a>
              </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
