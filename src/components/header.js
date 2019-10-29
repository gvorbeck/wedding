import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"


const Header = ({ siteTitle, menuLinks }) => (
    <header className={headerStyles.siteHeader}>
        <h1 className={headerStyles.siteHeaderTitle}>
            <Link to="/">{siteTitle}</Link>
        </h1>
        <nav>
            <ul className={headerStyles.siteHeaderList}>
                {menuLinks.map(link => (
                    <li key={link.name}>
                        <span><Link style={{ color: `white` }} to={link.link}>{link.name}</Link></span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
