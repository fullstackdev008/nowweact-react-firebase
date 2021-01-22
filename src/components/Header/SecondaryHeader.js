import React from 'react'
// material ui core components
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
// images and icons
import Logo from 'assets/images/logo.png'
import AlarmIcon from 'assets/images/icon/AlarmIcon.png'
import AccountIcon from 'assets/images/icon/AccountIcon.png'

import { useHistory } from 'react-router-dom'

// customized components
import Menu from './Menu'
// styles
import { makeStyles, withStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Header/secondaryHeader'
import globalStyles from 'assets/jss/nowweact'
import { primaryColor } from 'assets/jss/constants'

// firebase queries
import { getCurrentUserQuery, logoutQuery } from 'firebase/utils/query/auth'
import { getProfileQuery } from 'firebase/utils/query/profile'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const SearchTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: primaryColor,
      },
      '&:hover fieldset': {
        borderColor: primaryColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: primaryColor,
      },
    },
  },
})(TextField)

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
  // sign in state
  const [isSignin, setIsSignin] = React.useState(false)

  // current user variables and handlers
  const [currentUser, setCurrentUser] = React.useState({
    email: '',
    fullName: '',
  })

  const [currentUserAvatar, setCurrentUserAvatar] = React.useState('')

  const handleVideos = () => {
    history.push('/videos')
  }

  const handleLogout = () => {
    getCurrentUserQuery()
      .then(() => {
        logoutQuery()
          .then(result => {
            console.log(result)
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
            history.push('/')
          })
      })
      .catch(error => {
        setIsSignin(false)
        setIsLoading(false)
        console.log(error)
        history.push('/')
      })
  }, [isSignin, history])

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
      <div className={classes.searchArea}>
        <div style={{ width: '100%' }}>
          <SearchTextField
            id="search-textarea"
            placeholder="Search"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ fill: primaryColor }} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button className={classes.videoButton} onClick={handleVideos}>
          Videos
        </Button>
        <IconButton disabled={isLoading === true ? true : false}>
          <Badge classes={{ badge: classes.alarmBadge }} variant="dot">
            <img src={AlarmIcon} alt="..." className={globalClasses.icon} />
          </Badge>
        </IconButton>
        <Menu
          avatar={currentUserAvatar !== 'undefined' ? currentUserAvatar : AccountIcon}
          fullName={currentUser.fullName !== null ? currentUser.fullName : currentUser.email}
          logout={handleLogout}
        />
      </div>
    </div>
  )
}
