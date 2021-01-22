import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

// styles
import { makeStyles, withStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Profile/Profile'
import globalStyles from 'assets/jss/nowweact'
import { primaryColor } from 'assets/jss/constants'

import { updateEmailQuery } from 'firebase/utils/query/profile'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

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

export default function ChangeEmail(props) {
  const { handleUpdateEmailEvent } = props
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

  // change email variables and handlers
  const [changeEmailBool, setChangeEmailBool] = React.useState(false)
  const [emailInfo, setEmailInfo] = React.useState({
    currentEmail: '',
    newEmail: '',
    currentPassword: '',
  })
  const [helperEmailInfo, setHelperEmailInfo] = React.useState({
    currentEmail: '',
    newEmail: '',
    currentPassword: '',
  })
  const handleChangeEmailBool = () => {
    setChangeEmailBool(!changeEmailBool)
  }
  const handleChangeEmail = () => {
    setIsLoading(true)
    let boolean1 = false
    let boolean2 = false
    let boolean3 = false
    let boolean4 = false
    let boolean5 = false
    boolean1 = handleEmptyValidate(emailInfo.currentEmail, 'currentEmail')
    boolean2 = handleEmptyValidate(emailInfo.newEmail, 'newEmail')
    boolean3 = handleEmptyValidate(emailInfo.currentPassword, 'currentPassword')
    boolean4 = handleEmailValidate(emailInfo.currentEmail, 'currentEmail')
    boolean5 = handleEmailValidate(emailInfo.newEmail, 'newEmail')
    if (boolean1 === true && boolean2 === true && boolean3 === true && boolean4 === true && boolean5 === true) {
      updateEmailQuery(emailInfo)
        .then(response => {
          setMessageType('success')
          setMessage(response)
          setOpenMessage(true)
          setIsLoading(false)
          handleUpdateEmailEvent()
        })
        .catch(error => {
          setMessageType('error')
          setMessage(error.message)
          setOpenMessage(true)
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
  }

  // text input event handler
  const handleInputChange = event => {
    event.persist()
    switch (event.target.id) {
      case 'currentEmail':
        setEmailInfo(emailInfo => ({ ...emailInfo, currentEmail: event.target.value }))
        break
      case 'newEmail':
        setEmailInfo(emailInfo => ({ ...emailInfo, newEmail: event.target.value }))
        break
      case 'currentPassword':
        setEmailInfo(emailInfo => ({ ...emailInfo, currentPassword: event.target.value }))
        break
    }
  }

  // validate handler
  const handleEmptyValidate = (value, type) => {
    if (value === undefined || value === null || value.length === 0) {
      switch (type) {
        case 'currentEmail':
          setHelperEmailInfo(helperEmailInfo => ({
            ...helperEmailInfo,
            currentEmail: 'Required current email.',
          }))
          break
        case 'newEmail':
          setHelperEmailInfo(helperEmailInfo => ({
            ...helperEmailInfo,
            newEmail: 'Required new email.',
          }))
          break
        case 'currentPassword':
          setHelperEmailInfo(helperEmailInfo => ({
            ...helperEmailInfo,
            currentPassword: 'Required current password.',
          }))
          break
      }
      return false
    } else {
      switch (type) {
        case 'currentemail':
          setHelperEmailInfo(helperEmailInfo => ({
            ...helperEmailInfo,
            currentEmail: '',
          }))
          break
        case 'newEmail':
          setHelperEmailInfo(helperEmailInfo => ({
            ...helperEmailInfo,
            newEmail: '',
          }))
          break
        case 'currentPassword':
          setHelperEmailInfo(helperEmailInfo => ({
            ...helperEmailInfo,
            currentPassword: '',
          }))
          break
      }
      return true
    }
  }
  const handleEmailValidate = (email, type) => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    switch (type) {
      case 'currentEmail':
        if (email.match(mailformat)) {
          setHelperEmailInfo(helperEmailInfo => ({ ...helperEmailInfo, currentEmail: '' }))
          return true
        }
        setHelperEmailInfo(helperEmailInfo => ({ ...helperEmailInfo, currentEmail: 'Please insert correct email.' }))
        return false
      case 'newEmail':
        if (email.match(mailformat)) {
          setHelperEmailInfo(helperEmailInfo => ({ ...helperEmailInfo, newEmail: '' }))
          return true
        }
        setHelperEmailInfo(helperEmailInfo => ({ ...helperEmailInfo, newEmail: 'Please insert correct email.' }))
        return false
    }
  }

  return (
    <Grid container>
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
      <Grid item xs={12} sm={12} className={classes.itemPadding}>
        <Button className={classes.changepwdButton} variant="outlined" onClick={() => handleChangeEmailBool()}>
          Change email
        </Button>
      </Grid>
      {changeEmailBool ? (
        <Grid container>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <CustomTextField
              label="CURRENT EMAIL"
              id="currentEmail"
              fullWidth
              value={emailInfo.currentEmail}
              className={classes.textField}
              helperText={helperEmailInfo.currentEmail}
              margin="normal"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <CustomTextField
              label="NEW EMAIL"
              id="newEmail"
              fullWidth
              value={emailInfo.newEmail}
              className={classes.textField}
              helperText={helperEmailInfo.newEmail}
              margin="normal"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <CustomTextField
              label="CURRENT PASSWORD"
              type="password"
              id="currentPassword"
              fullWidth
              value={emailInfo.currentPassword}
              className={classes.textField}
              helperText={helperEmailInfo.currentPassword}
              margin="normal"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <Box mt={2}>
              {isLoading ? (
                <Button className={globalClasses.button} variant="outlined" onClick={() => handleChangeEmail()}>
                  Submit
                </Button>
              ) : (
                <Button className={globalClasses.button} variant="outlined" onClick={() => handleChangeEmail()}>
                  Submit
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  )
}
