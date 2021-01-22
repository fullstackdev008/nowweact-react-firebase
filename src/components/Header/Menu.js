import React from 'react'
// material ui core components
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'

import { useHistory } from 'react-router-dom'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Header/Menu'
import globalStyles from 'assets/jss/nowweact'
import { primaryColor } from 'assets/jss/constants'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

const StyledMenu = withStyles({
  paper: {
    border: '1px solid',
    borderColor: primaryColor,
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: primaryColor,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

export default function CustomizedMenus(props) {
  const history = useHistory()
  const classes = useStyles()
  const globalClasses = globalUseStyles()

  const { avatar, fullName, logout } = props
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCreateProject = () => {
    history.push('/create-project')
  }
  const handleVideos = () => {
    history.push('/videos')
  }
  const handleProfile = () => {
    history.push('/profile')
  }
  const handleLogout = () => {
    handleClose()
    logout()
  }

  return (
    <div>
      <Button aria-controls="customized-menu" aria-haspopup="true" className={classes.menuButton} onClick={handleClick}>
        <img src={avatar} alt="..." className={classes.icon} />
        <Typography className={globalClasses.pointer} size={14}>
          {fullName !== undefined && fullName.split(' ')[0].slice(0, 1).toUpperCase()}
          {fullName !== undefined && fullName.split(' ')[0].slice(1).toLowerCase()}{' '}
          {fullName !== undefined &&
            fullName.split(' ')[1] !== undefined &&
            fullName.split(' ')[1].slice(0, 1).toUpperCase()}
        </Typography>
      </Button>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <StyledMenuItem onClick={handleCreateProject}>
          <ListItemText primary="Create Project" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleVideos}>
          <ListItemText primary="Videos" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleProfile}>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  )
}
