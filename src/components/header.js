import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"
import FireSVG from "../components/fireSVG"

const Header = ({ siteTitle, menuLinks }) => (
    <header className={headerStyles.siteHeader}>
        <FireSVG className={headerStyles.siteHeader__logo} />
        <h1 className={headerStyles.siteHeader__title}><Link className={headerStyles.siteHeader__home} to="/">K + G{/*siteTitle*/}</Link></h1>
        <nav className={headerStyles.navigation}>
            <input type="checkbox" id="navigation-input" className={headerStyles.navigation__input} />
            <label for="navigation-input" className={headerStyles.navigation__label}>
                <div className={headerStyles.navigation__icon} />
            </label>
            <ul className={headerStyles.navigation__list}>
                {menuLinks.map(link => (
                    <li className={headerStyles.navigation__listItem} key={link.name}>
                        <span className={headerStyles.navigation__listSpan}><Link className={headerStyles.navigation__link} to={link.link}>{link.name}</Link></span>
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
