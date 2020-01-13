import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "../styles/header.module.scss"
// import FireSVG from "../components/fireSVG"

const Header = ({ siteTitle, menuLinks }) => (
    <header className={headerStyles.siteHeader}>
        {/*<FireSVG className={headerStyles.siteHeader__logo} />*/}
        <h1 className={headerStyles.title}><Link to="/">K & G{/*siteTitle*/}</Link></h1>
        <nav className={headerStyles.navigation}>
            <input type="checkbox" id="navigation-input"/>
            <label for="navigation-input">
                <div className={headerStyles.icon}/>
            </label>
            <ul>
                {menuLinks.map(link => (
                    <li key={link.name}>
                        <span>
                            {!link.ext ?
                                <Link to={link.link}>{link.name}</Link>
                            : (
                                <a href={link.link} rel="nofollow" target="_blank" title={link.name}>{link.name}</a>
                            )}
                        </span>
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
