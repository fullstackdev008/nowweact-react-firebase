import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

// customized components
import StepButtonGroup from 'components/StepButtonGroup/StepButtonGroup'
import GeneralStepCard from 'components/CreateProject/GeneralStepCard'
import LinksStepCard from 'components/CreateProject/LinksStepCard'
import RolesStepCard from 'components/CreateProject/RolesStepCard'
import RevisionStepCard from 'components/CreateProject/RolesStepCard'

// images
import people from 'assets/images/icon/people.png'
import flag from 'assets/images/icon/flag.png'
// material ui icons
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt'
import SkipNextIcon from '@material-ui/icons/SkipNext'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/CreateProject/CreateProject'
import globalStyles from 'assets/jss/nowweact'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function CreateProject() {
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

  // current step variables and handlers
  const [currentStep, setCurrentStep] = React.useState(1) // initial value is 1 regarding for general step
  const handleChangeCurrentStep = step => {
    setCurrentStep(step)
  }
  const handleNextButton = step => {
    switch (step) {
      case 1:
        if (handleGeneralValidate() === true) {
          setCurrentValidateState(currentValidateState => ({ ...currentValidateState, general: true }))
          setCurrentStep(step + 1)
        } else {
          setCurrentValidateState(currentValidateState => ({ ...currentValidateState, general: false }))
          setMessageType('warning')
          setMessage('Please insert all information')
          setOpenMessage(true)
        }
        break
      case 2:
        if (handleLinksValidate() === true) {
          setCurrentValidateState(currentValidateState => ({ ...currentValidateState, links: true }))
          setCurrentStep(step + 1)
        } else {
          setCurrentValidateState(currentValidateState => ({ ...currentValidateState, links: false }))
          setMessageType('warning')
          setMessage('Please insert all information')
          setOpenMessage(true)
        }
        break
      case 3:
        if (handleRolesValidate() === true) {
          setCurrentValidateState(currentValidateState => ({ ...currentValidateState, roles: true }))
          setCurrentStep(step + 1)
        } else {
          setCurrentValidateState(currentValidateState => ({ ...currentValidateState, roles: false }))
          setMessageType('warning')
          setMessage('Please insert all information')
          setOpenMessage(true)
        }
        break
      case 4:
        if (handleRevisionValidate() === true) {
          setCurrentValidateState(currentValidateState => ({ ...currentValidateState, revision: true }))
          handlePublishButton()
        } else {
          setCurrentValidateState(currentValidateState => ({ ...currentValidateState, revision: false }))
          setMessageType('warning')
          setMessage('Please insert all information')
          setOpenMessage(true)
        }
        break
    }
  }
  const handlePublishButton = () => {
    console.log('Clicked publish button')
    console.log(generalInfo)
    console.log(linksInfo)
    console.log(rolesInfo)
    console.log(revisionInfo)
  }

  // current validation state variable
  const [currentValidateState, setCurrentValidateState] = React.useState({
    general: false,
    links: false,
    roles: false,
    revision: false,
  })

  // project informations and validations
  const [generalInfo, setGeneralInfo] = React.useState({
    title: '',
    country: '',
    address: '',
    city: '',
    zip: '',
    description: '',
    goal: '',
  })
  const [linksInfo, setLinksInfo] = React.useState({})
  const [rolesInfo, setRolesInfo] = React.useState({})
  const [revisionInfo, setRevisionInfo] = React.useState({})

  const handleSetGeneralInfo = (type, value) => {
    switch (type) {
      case 'title':
        setGeneralInfo(generalInfo => ({ ...generalInfo, title: value }))
        break
      case 'country':
        setGeneralInfo(generalInfo => ({ ...generalInfo, country: value }))
        break
      case 'address':
        setGeneralInfo(generalInfo => ({ ...generalInfo, address: value }))
        break
      case 'city':
        setGeneralInfo(generalInfo => ({ ...generalInfo, city: value }))
        break
      case 'zip':
        setGeneralInfo(generalInfo => ({ ...generalInfo, zip: value }))
        break
      case 'description':
        setGeneralInfo(generalInfo => ({ ...generalInfo, description: value }))
        break
      case 'goal':
        setGeneralInfo(generalInfo => ({ ...generalInfo, goal: value }))
        break
    }
  }
  const handleSetLinksInfo = (type, value) => {
    switch (type) {
      case 'title':
        setLinksInfo(linksInfo => ({ ...linksInfo, title: value }))
        break
    }
  }
  const handleSetRolesInfo = (type, value) => {
    switch (type) {
      case 'title':
        setRolesInfo(rolesInfo => ({ ...rolesInfo, title: value }))
        break
    }
  }
  const handleSetRevisionInfo = (type, value) => {
    switch (type) {
      case 'title':
        setRevisionInfo(revisionInfo => ({ ...revisionInfo, title: value }))
        break
    }
  }
  // field required variables
  const [generalRequired, setGeneralRequired] = React.useState({
    title: 'required',
    country: 'required',
    address: 'required',
    city: 'required',
    zip: 'required',
    description: 'required',
    goal: 'required',
  })
  const handleSetGeneralRequired = (type, value) => {
    switch (type) {
      case 'title':
        setGeneralRequired(generalRequired => ({ ...generalRequired, title: value }))
        break
      case 'country':
        setGeneralRequired(generalRequired => ({ ...generalRequired, country: value }))
        break
      case 'address':
        setGeneralRequired(generalRequired => ({ ...generalRequired, address: value }))
        break
      case 'city':
        setGeneralRequired(generalRequired => ({ ...generalRequired, city: value }))
        break
      case 'zip':
        setGeneralRequired(generalRequired => ({ ...generalRequired, zip: value }))
        break
      case 'description':
        setGeneralRequired(generalRequired => ({ ...generalRequired, description: value }))
        break
      case 'goal':
        setGeneralRequired(generalRequired => ({ ...generalRequired, goal: value }))
        break
    }
  }
  // validation handlers
  const handleGeneralValidate = () => {
    if (
      generalInfo.title !== '' &&
      generalInfo.country !== '' &&
      generalInfo.address !== '' &&
      generalInfo.city !== '' &&
      generalInfo.zip !== '' &&
      generalInfo.description !== '' &&
      generalInfo.goal !== ''
    ) {
      return true
    } else {
      return false
    }
  }
  const handleLinksValidate = () => {
    if (linksInfo.title !== '' && linksInfo.country !== '' && linksInfo.goal !== '') {
      return true
    } else {
      return false
    }
  }
  const handleRolesValidate = () => {
    if (rolesInfo.title !== '' && rolesInfo.country !== '' && rolesInfo.goal !== '') {
      return true
    } else {
      return false
    }
  }
  const handleRevisionValidate = () => {
    if (revisionInfo.title !== '' && revisionInfo.country !== '' && revisionInfo.goal !== '') {
      return true
    } else {
      return false
    }
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
        <Grid container direction="row" justify="space-between">
          <div className={classes.projectTitle}>{generalInfo.title}</div>
          <div className={classes.buttonArea}>
            <StepButtonGroup
              title=""
              currentStep={currentStep}
              changeCurrentStep={handleChangeCurrentStep}
              currentValidateState={currentValidateState}
            />
            {currentStep === 4 ? (
              <Button className={classes.publishButton} onClick={() => handlePublishButton()}>
                <SystemUpdateAltIcon className={classes.publishIcon} />
                Publish
              </Button>
            ) : (
              <Button className={classes.publishButton} onClick={() => handleNextButton(currentStep)}>
                <SkipNextIcon className={classes.publishIcon} />
                Next
              </Button>
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          {currentStep === 1 ? (
            <GeneralStepCard
              generalInfo={generalInfo}
              setGeneralInfo={handleSetGeneralInfo}
              generalRequired={generalRequired}
              setGeneralRequired={handleSetGeneralRequired}
            />
          ) : (
            <></>
          )}
          {currentStep === 2 ? <LinksStepCard linksInfo={linksInfo} setLinksInfo={handleSetLinksInfo} /> : <></>}
          {currentStep === 3 ? <RolesStepCard rolesInfo={rolesInfo} setRolesInfo={handleSetRolesInfo} /> : <></>}
          {currentStep === 4 ? (
            <RevisionStepCard revisionInfo={revisionInfo} setRevisionInfo={handleSetRevisionInfo} />
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: '24px 24px 24px 0px' }}>
            <Button fullWidth className={classes.button}>
              <img src={people} alt="..." className={classes.icon} />
              <div className={classes.displayBlock}>
                <div className={classes.title}>Not activated</div>
                <div className={classes.subtitle}>Social media</div>
              </div>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: '24px 0px 24px 24px' }}>
            <Button fullWidth className={classes.button}>
              <img src={flag} alt="..." className={classes.icon} />
              <div className={classes.displayBlock}>
                <div className={classes.title}>Activate</div>
                <div className={classes.subtitle}>Report button</div>
              </div>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
