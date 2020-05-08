import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
  >
    <nav
      className={styles.headerNav}
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem`,
      }}
    >
      <h1 className={styles.branding}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link
        to="/"
      >
        Docs
      </Link>
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
