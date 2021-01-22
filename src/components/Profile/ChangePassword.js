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

import { updatePasswordQuery } from 'firebase/utils/query/profile'

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

export default function ChangePassword() {
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

  // change password variables and handlers
  const [changePasswordBool, setChangePasswordBool] = React.useState(false)
  const [passwordInfo, setPasswordInfo] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [helperPasswordInfo, setHelperPasswordInfo] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const handleChangePasswordBool = () => {
    setChangePasswordBool(!changePasswordBool)
  }
  const handleChangePassword = () => {
    setIsLoading(true)
    let boolean1 = false
    let boolean2 = false
    let boolean3 = false
    let boolean4 = false
    boolean1 = handleEmptyValidate(passwordInfo.currentPassword, 'currentPassword')
    boolean2 = handleEmptyValidate(passwordInfo.newPassword, 'newPassword')
    boolean3 = handleEmptyValidate(passwordInfo.confirmPassword, 'confirmPassword')
    boolean4 = handleComparePasswords(passwordInfo.newPassword, passwordInfo.confirmPassword)
    if (boolean1 === true && boolean2 === true && boolean3 === true && boolean4 === true) {
      updatePasswordQuery(passwordInfo.currentPassword, passwordInfo.newPassword)
        .then(response => {
          setMessageType('success')
          setMessage(response)
          setOpenMessage(true)
          setIsLoading(false)
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
      case 'currentPassword':
        setPasswordInfo(passwordInfo => ({ ...passwordInfo, currentPassword: event.target.value }))
        break
      case 'newPassword':
        setPasswordInfo(passwordInfo => ({ ...passwordInfo, newPassword: event.target.value }))
        break
      case 'confirmPassword':
        setPasswordInfo(passwordInfo => ({ ...passwordInfo, confirmPassword: event.target.value }))
        break
    }
  }

  // validate handler
  const handleEmptyValidate = (value, type) => {
    if (value === undefined || value === null || value.length === 0) {
      switch (type) {
        case 'currentPassword':
          setHelperPasswordInfo(helperPasswordInfo => ({
            ...helperPasswordInfo,
            currentPassword: 'Required current password.',
          }))
          break
        case 'newPassword':
          setHelperPasswordInfo(helperPasswordInfo => ({
            ...helperPasswordInfo,
            newPassword: 'Required new password.',
          }))
          break
        case 'confirmPassword':
          setHelperPasswordInfo(helperPasswordInfo => ({
            ...helperPasswordInfo,
            confirmPassword: 'Required confirm password.',
          }))
          break
      }
      return false
    } else {
      switch (type) {
        case 'currentPassword':
          setHelperPasswordInfo(helperPasswordInfo => ({
            ...helperPasswordInfo,
            currentPassword: '',
          }))
          break
        case 'newPassword':
          setHelperPasswordInfo(helperPasswordInfo => ({
            ...helperPasswordInfo,
            newPassword: '',
          }))
          break
        case 'confirmPassword':
          setHelperPasswordInfo(helperPasswordInfo => ({
            ...helperPasswordInfo,
            confirmPassword: '',
          }))
          break
      }
      return true
    }
  }

  const handleComparePasswords = (newPassword, confirmPassword) => {
    if (newPassword !== confirmPassword) {
      setHelperPasswordInfo(helperPasswordInfo => ({
        ...helperPasswordInfo,
        newPassword: 'Not Matched',
      }))
      setHelperPasswordInfo(helperPasswordInfo => ({
        ...helperPasswordInfo,
        confirmPassword: 'Not Matched',
      }))
      return false
    } else {
      return true
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
        <Button className={classes.changepwdButton} variant="outlined" onClick={() => handleChangePasswordBool()}>
          Change password
        </Button>
      </Grid>
      {changePasswordBool ? (
        <Grid container>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <CustomTextField
              label="CURRENT PASSWORD"
              type="password"
              id="currentPassword"
              fullWidth
              value={passwordInfo.currentPassword}
              className={classes.textField}
              helperText={helperPasswordInfo.currentPassword}
              margin="normal"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <CustomTextField
              label="NEW PASSWORD"
              type="password"
              id="newPassword"
              fullWidth
              value={passwordInfo.newPassword}
              className={classes.textField}
              helperText={helperPasswordInfo.newPassword}
              margin="normal"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <CustomTextField
              label="CONFIRM PASSWORD"
              type="password"
              id="confirmPassword"
              fullWidth
              value={passwordInfo.confirmpassword}
              className={classes.textField}
              helperText={helperPasswordInfo.confirmPassword}
              margin="normal"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <Box mt={2}>
              {isLoading ? (
                <Button className={globalClasses.button} variant="outlined" onClick={() => handleChangePassword()}>
                  Submit
                </Button>
              ) : (
                <Button className={globalClasses.button} variant="outlined" onClick={() => handleChangePassword()}>
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
