import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import logo from '../img/sketcheslogo.svg';

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
      <div className="cen">
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        
          <div className="navbar">
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
            <div className="navbar has-text-centered">
              <Link className="navbar-item" to="/who-am-i">
                Who Am I?
              </Link>
              <Link className="navbar-item" to="/interesting-things">
                Interesting things
              </Link>
              <Link className="navbar-item" to="/theatre">
                Theatre
              </Link>
              <Link className="navbar-item" to="/writing">
                Writing
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
          
      </nav>
      </div>
    )
  }
}

export default Navbar
