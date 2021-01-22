import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/SecondaryHeader'
// material ui core components
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/layout/secondary'
const useStyles = makeStyles(styles)
export default function SecondaryLayout({ children, nav }) {
  const classes = useStyles()
  const [openMenu, setOpenMenu] = React.useState(true)
  const handleNavMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <div className={classes.flex}>
      <Header />
      <div className={openMenu ? classes.navbar : classes.closeNavbar}>
        <Navbar nav={nav} openMenu={openMenu} />
        <Button className={classes.closeMenu} onClick={() => handleNavMenu()}>
          {openMenu ? 'Close Menu' : 'Open Menu'}
        </Button>
        <div className={classes.clseMenuArrow} />
      </div>
      <div className={openMenu ? classes.children : classes.closeChildren}>{children}</div>
    </div>
  )
}

SecondaryLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
