import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"
import FireSVG from "../components/fireSVG"

const Header = ({ siteTitle, menuLinks }) => (
    <header className={headerStyles.siteHeader}>
        <FireSVG />
        <h1 className={headerStyles.siteHeader__title}><Link to="/">{siteTitle}</Link></h1>
        <nav className={headerStyles.navigation}>
            <input type="checkbox" id="navigation-input" className={headerStyles.navigation__input} />
            <label for="navigation-input" className={headerStyles.navigation__label}>
                <div className={headerStyles.navigation__icon} />
            </label>
            <ul className={headerStyles.navigation__list}>
                {menuLinks.map(link => (
                    <li className={headerStyles.navigation__listItem} key={link.name}>
                        <span><Link to={link.link}>{link.name}</Link></span>
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
