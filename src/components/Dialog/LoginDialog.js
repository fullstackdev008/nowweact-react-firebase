import React from 'react'

// material ui core components
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Dialog/LoginDialog'

import { primaryColor } from 'assets/jss/constants'

// firebase queries
import { loginQuery, registerQuery } from 'firebase/utils/query/auth'

const useStyles = makeStyles(styles)

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const CustomTextField = withStyles({
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
    '& .MuiFormHelperText-root': {
      color: primaryColor,
    },
  },
})(TextField)

export default function LoginDailog(props) {
  const { open, close } = props
  const classes = useStyles()

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

  const [authInfo, setAuthInfo] = React.useState({
    email: '',
    password: '',
  })
  const [helperEmail, setHelperEmail] = React.useState('')
  const [helperPassword, setHelperPassword] = React.useState('')

  const handleLogin = () => {
    validateEmail(authInfo.email)
    validatePassword(authInfo.password)
    if (validateEmail(authInfo.email) === true && validatePassword(authInfo.password) === true) {
      loginQuery(authInfo)
        .then(response => {
          setMessageType('success')
          setMessage(response.message)
          setOpenMessage(true)
          setAuthInfo(authInfo => ({ ...authInfo, email: '', password: '' }))
          close(true)
        })
        .catch(error => {
          setMessageType('error')
          setMessage(error.message)
          setOpenMessage(true)
        })
    }
  }

  const handleRegister = () => {
    validateEmail(authInfo.email)
    validatePassword(authInfo.password)
    if (validateEmail(authInfo.email) === true && validatePassword(authInfo.password) === true) {
      registerQuery(authInfo)
        .then(response => {
          setMessageType('success')
          setMessage(response.message)
          setOpenMessage(true)
          setAuthInfo(authInfo => ({ ...authInfo, email: '', password: '' }))
          close()
        })
        .catch(error => {
          setMessageType('error')
          setMessage(error.message)
          setOpenMessage(true)
        })
    }
  }

  const validatePassword = password => {
    if (password.length !== 0) {
      setHelperPassword('')
      return true
    }
    setHelperPassword('Please insert password.')
    return false
  }

  const validateEmail = email => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.match(mailformat)) {
      setHelperEmail('')
      return true
    }
    setHelperEmail('Please insert correct email.')
    return false
  }
  const handleInputChange = event => {
    event.persist()
    switch (event.target.id) {
      case 'email':
        setAuthInfo(authInfo => ({ ...authInfo, email: event.target.value }))
        break
      case 'password':
        setAuthInfo(authInfo => ({ ...authInfo, password: event.target.value }))
        break
    }
  }

  return (
    <>
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
      {open ? (
        <div className={classes.container}>
          <div className={classes.closeButtonPos}>
            <IconButton size="medium" className={classes.closeButton} onClick={() => close(false)}>
              ✖
            </IconButton>
          </div>
          <div className={classes.title}>Now We Act</div>
          <div className={classes.subTitle}>Sub Title</div>
          <div className={classes.textFieldArea}>
            <CustomTextField
              id="email"
              placeholder="Name"
              variant="outlined"
              fullWidth
              helperText={helperEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.textFieldArea}>
            <CustomTextField
              id="password"
              placeholder="Password"
              type="password"
              variant="outlined"
              fullWidth
              helperText={helperPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityIcon style={{ fill: primaryColor }} />
                  </InputAdornment>
                ),
              }}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.buttonGroupArea}>
            <Button className={classes.button} onClick={handleLogin}>
              Send
            </Button>
            <Button className={classes.button} style={{ color: '#999696' }} onClick={handleRegister}>
              Register
            </Button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
