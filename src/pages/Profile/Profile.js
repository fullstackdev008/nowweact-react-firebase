import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

// customized component
// import Dropzone from 'components/Dropzone/Dropzone'
// import Avatar from 'components/Avatar/Avatar'
import AvatarCropper from 'components/Profile/AvatarCropper'
import ChangePassword from 'components/Profile/ChangePassword'
import ChangeEmail from 'components/Profile/ChangeEmail'

// images
import people from 'assets/images/icon/people.png'
import flag from 'assets/images/icon/flag.png'

import FlagIcon from 'components/FlagIcon/FlagIcon'
import EditIcon from '@material-ui/icons/Edit'

import { useHistory } from 'react-router-dom'

// styles
import { makeStyles, withStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Profile/Profile'
import globalStyles from 'assets/jss/nowweact'
import { primaryColor } from 'assets/jss/constants'

// firebase queries
import { getCurrentUserQuery } from 'firebase/utils/query/auth'
import { getProfileQuery, setProfileQuery } from 'firebase/utils/query/profile'

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

export default function Profile() {
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

  // user profile variables and handlers
  const [currentUserProfile, setCurrentUserProfile] = React.useState({
    email: '',
    fullName: '',
    city: '',
    uid: '',
    avatar: '',
  })

  const [currentUserAvatar, setCurrentUserAvatar] = React.useState('')

  const [helperInfo, setHelperInfo] = React.useState({
    email: '',
    fullName: '',
    city: '',
  })

  const [updateEmailState, setUpdateEmailState] = React.useState(false)

  const handleUpdateEmailEvent = () => {
    setUpdateEmailState(true)
  }

  React.useEffect(() => {
    setIsLoading(true)
    getCurrentUserQuery()
      .then(user => {
        getProfileQuery(user.uid)
          .then(profile => {
            profile.forEach(function (doc) {
              setCurrentUserProfile(doc.data())
            })
            setCurrentUserAvatar(profile.avatar)
            setIsLoading(false)
          })
          .catch(error => {
            setIsLoading(false)
            console.log(error)
          })
      })
      .catch(error => {
        setIsLoading(false)
        history.push('/')
        console.log(error)
      })
    setUpdateEmailState(false)
  }, [history, updateEmailState])

  // text input event handler
  const handleInputChange = event => {
    event.persist()
    switch (event.target.id) {
      case 'email':
        setCurrentUserProfile(currentUserProfile => ({ ...currentUserProfile, email: event.target.value }))
        break
      case 'fullName':
        setCurrentUserProfile(currentUserProfile => ({ ...currentUserProfile, fullName: event.target.value }))
        break
      case 'city':
        setCurrentUserProfile(currentUserProfile => ({ ...currentUserProfile, city: event.target.value }))
        break
    }
  }

  // approve changes button event handler
  const handleApproveChanges = () => {
    setIsLoading(true)
    let boolean1 = false
    let boolean2 = false
    let boolean3 = false
    let boolean4 = false
    boolean1 = validateEmail(currentUserProfile.email)
    boolean2 = handleEmptyValidate(currentUserProfile.fullName, 'fullName')
    boolean3 = handleEmptyValidate(currentUserProfile.city, 'city')
    boolean4 = handleEmptyAvatar(currentUserProfile.avatar)
    if (boolean1 === true && boolean2 === true && boolean3 === true && boolean4 === true) {
      setProfileQuery(currentUserProfile)
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

  // get avatar
  const getAvatar = avatar => {
    setCurrentUserProfile(currentUserProfile => ({ ...currentUserProfile, avatar: avatar }))
  }

  // validate handler
  const handleEmptyValidate = (value, type) => {
    if (value === undefined || value === null || value.length === 0) {
      switch (type) {
        case 'fullName':
          setHelperInfo(helperInfo => ({ ...helperInfo, fullName: 'Required name and surname.' }))
          break
        case 'city':
          setHelperInfo(helperInfo => ({ ...helperInfo, city: 'Required city.' }))
          break
      }
      return false
    } else {
      switch (type) {
        case 'fullName':
          setHelperInfo(helperInfo => ({ ...helperInfo, fullName: '' }))
          break
        case 'city':
          setHelperInfo(helperInfo => ({ ...helperInfo, city: '' }))
          break
      }
      return true
    }
  }

  const validateEmail = email => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.match(mailformat)) {
      setHelperInfo(helperInfo => ({ ...helperInfo, email: '' }))
      return true
    }
    setHelperInfo(helperInfo => ({ ...helperInfo, email: 'Please insert correct email.' }))
    return false
  }

  const handleEmptyAvatar = avatar => {
    if (avatar === '') {
      return false
    }
    return true
  }

  return (
    <div className={globalClasses.container}>
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
      <Grid container>
        <Grid item xs={12}>
          <div className={globalClasses.titleArea}>
            <div className={globalClasses.title}>Profile</div>
            <div>
              <Button
                className={globalClasses.button}
                onClick={() => handleApproveChanges()}
                disabled={isLoading ? true : false}
              >
                <EditIcon className={classes.approveIcon} />
                Approve changes
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent className={globalClasses.cardContent}>
              <Grid container>
                <Grid item xs={12} sm={12} className={classes.itemPadding}>
                  <CustomTextField
                    label="NAME AND SURNAME"
                    id="fullName"
                    fullWidth
                    value={
                      currentUserProfile.fullName !== null && currentUserProfile.fullName !== undefined
                        ? currentUserProfile.fullName
                        : ''
                    }
                    className={classes.textField}
                    helperText={helperInfo.fullName}
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.itemPadding}>
                  <CustomTextField
                    label="CITY"
                    id="city"
                    fullWidth
                    value={
                      currentUserProfile.city !== null && currentUserProfile.city !== undefined
                        ? currentUserProfile.city
                        : ''
                    }
                    className={classes.textField}
                    helperText={helperInfo.city}
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.itemPadding}>
                  <CustomTextField
                    label="EMAIL"
                    id="email"
                    fullWidth
                    value={
                      currentUserProfile.email !== null && currentUserProfile.email !== undefined
                        ? currentUserProfile.email
                        : ''
                    }
                    className={classes.textField}
                    helperText={helperInfo.email}
                    margin="normal"
                    disabled
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.itemPadding}>
                  <AvatarCropper getAvatar={getAvatar} avatar={currentUserAvatar} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ChangeEmail handleUpdateEmailEvent={handleUpdateEmailEvent} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ChangePassword />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: '24px 24px 24px 0px' }}>
            <Button fullWidth className={classes.button}>
              <div className={classes.flexStart}>
                <img src={people} alt="..." className={classes.icon} />
                <div className={classes.displayBlock}>
                  <div className={classes.title}>32</div>
                  <div className={classes.subtitle}>Necessary roles</div>
                </div>
              </div>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: '24px 0px 24px 24px' }}>
            <Button fullWidth className={classes.button}>
              <div className={classes.flexStart}>
                <img src={flag} alt="..." className={classes.icon} />
                <div className={classes.displayBlock}>
                  <div className={classes.title}>United States</div>
                  <div className={classes.subtitle}>Location</div>
                </div>
              </div>
              <FlagIcon country="US" /> {/* add country abbreviation */}
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
