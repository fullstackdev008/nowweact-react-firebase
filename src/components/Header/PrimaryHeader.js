import React from 'react'
// material ui core components
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
// images and icons
import Logo from 'assets/images/logo.png'
import AlarmIcon from 'assets/images/icon/AlarmIcon.png'
import AccountIcon from 'assets/images/icon/AccountIcon.png'

import { useHistory } from 'react-router-dom'

// customized components
import LoginDialog from 'components/Dialog/LoginDialog'
import Menu from './Menu'
// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Header/primaryHeader'
import globalStyles from 'assets/jss/nowweact'

// firebase queries
import { getCurrentUserQuery, logoutQuery } from 'firebase/utils/query/auth'
import { getProfileQuery } from 'firebase/utils/query/profile'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function Header() {
  const history = useHistory()
  const classes = useStyles()
  const globalClasses = globalUseStyles()

  // snackbar variables and handle events
  const [message, setMessage] = React.useState('')
  const [messageType, setMessageType] = React.useState('success')
  const [openMessage, setOpenMessage] = React.useState(false)
  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenMessage(false)
  }

  // loading state variable
  const [isLoading, setIsLoading] = React.useState(false)

  const [isSignin, setIsSignin] = React.useState(false)

  // current user variables and handlers
  const [currentUser, setCurrentUser] = React.useState({
    email: '',
    fullName: '',
  })

  const [currentUserAvatar, setCurrentUserAvatar] = React.useState('')

  const [openLoginDialog, setOpenLoginDialog] = React.useState(false)

  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true)
  }

  const handleCloseLoginDialog = result => {
    setOpenLoginDialog(false)
    setIsSignin(result)
  }

  const handleVideos = () => {
    history.push('/videos')
  }
  const handleCreateProject = () => {
    history.push('/create-project')
  }
  const handleLogout = () => {
    getCurrentUserQuery()
      .then(() => {
        logoutQuery()
          .then(result => {
            setMessageType('success')
            setMessage(result.message)
            setOpenMessage(true)
            setIsSignin(false)
          })
          .catch(error => {
            setMessageType('error')
            setMessage(error.message)
            setOpenMessage(true)
          })
      })
      .catch(error => {
        setMessageType('error')
        setMessage(error.message)
        setOpenMessage(true)
      })
  }

  React.useEffect(() => {
    setIsLoading(true)
    getCurrentUserQuery()
      .then(user => {
        setIsSignin(true)
        getProfileQuery(user.uid)
          .then(profile => {
            profile.forEach(function (doc) {
              setCurrentUser(currentUser => ({
                ...currentUser,
                email: doc.data().email,
                fullName: doc.data().fullName,
              }))
            })
            setCurrentUserAvatar(profile.avatar)
            setIsLoading(false)
            setIsSignin(true)
          })
          .catch(error => {
            setIsLoading(false)
            setIsSignin(false)
            setMessageType('error')
            setMessage(error.message)
            setOpenMessage(true)
          })
      })
      .catch(error => {
        setIsSignin(false)
        setIsLoading(false)
        console.log(error)
      })
  }, [isSignin])
  return (
    <div className={classes.container}>
      {/* snackbar component */}
      <Snackbar
        open={openMessage}
        autoHideDuration={5000}
        onClose={handleMessageClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Alert onClose={handleMessageClose} severity={messageType}>
          {message}
        </Alert>
      </Snackbar>
      <div className={classes.logoArea}>
        <img src={Logo} alt="..." className={classes.logo} />
      </div>
      <div className={classes.buttonArea}>
        <Button className={classes.videoButton} onClick={handleVideos} disabled={isLoading === true ? true : false}>
          Videos
        </Button>
        <Button
          className={classes.createBtn}
          onClick={handleCreateProject}
          disabled={isLoading === true ? true : false}
        >
          Create Project
        </Button>
        <IconButton disabled={isLoading === true ? true : false}>
          <Badge classes={{ badge: classes.alarmBadge }} variant="dot">
            <img src={AlarmIcon} alt="..." className={globalClasses.icon} />
          </Badge>
        </IconButton>
        {isSignin ? (
          <Menu
            avatar={currentUserAvatar !== 'undefined' ? currentUserAvatar : AccountIcon}
            fullName={currentUser.fullName !== null ? currentUser.fullName : currentUser.email}
            logout={handleLogout}
          />
        ) : (
          <Button
            className={classes.button}
            onClick={() => handleOpenLoginDialog()}
            disabled={isLoading === true ? true : false}
          >
            <img src={AccountIcon} alt="..." className={classes.icon} />
            <Typography className={globalClasses.pointer} size={14} onClick={() => handleOpenLoginDialog()}>
              Login
            </Typography>
          </Button>
        )}
      </div>
      <LoginDialog open={openLoginDialog} close={handleCloseLoginDialog} />
    </div>
  )
}
