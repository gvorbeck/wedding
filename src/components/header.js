import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div>
          <nav>
            <ul>
              {menuLinks.map(link => (
                <li key={link.name}>
                  <Link style={{ color: `white` }} to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
