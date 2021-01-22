import React from 'react'

// material ui core components
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/StepButtonGroup/StepbuttonGroup'
const useStyles = makeStyles(styles)

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function StepButtonGroup(props) {
  const { title, currentStep, changeCurrentStep, currentValidateState } = props
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

  const handleStepButton = step => {
    switch (step) {
      case 1: // 1 is general step
        changeCurrentStep(1)
        break
      case 2: // 2 is links step
        if (currentValidateState.general === true) {
          changeCurrentStep(2)
        } else {
          setMessageType('warning')
          setMessage('Please insert all information in general step')
          setOpenMessage(true)
        }
        break
      case 3: // 3 is roles step
        if (currentValidateState.general === true && currentValidateState.links === true) {
          changeCurrentStep(3)
        } else {
          setMessageType('warning')
          setMessage('Please insert all information in general and links steps')
          setOpenMessage(true)
        }
        break
      case 4: // 4 is revision step
        if (
          currentValidateState.general === true &&
          currentValidateState.links === true &&
          currentValidateState.roles === true
        ) {
          changeCurrentStep(4)
        } else {
          setMessageType('warning')
          setMessage('Please insert all information in general, links, roles steps')
          setOpenMessage(true)
        }
        break
    }
  }
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.box}>
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
      <div className={classes.title}>{title}</div>
      <Box display="flex" justifyContent="space-between" alignItems="flex-end">
        <ButtonGroup className={classes.stepButtonGroup}>
          <Button
            className={currentStep === 1 ? classes.currentStepButton : classes.stepButton}
            onClick={() => handleStepButton(1)}
          >
            General
          </Button>
          <Button
            className={currentStep === 2 ? classes.currentStepButton : classes.stepButton}
            onClick={() => handleStepButton(2)}
          >
            Links
          </Button>
          <Button
            className={currentStep === 3 ? classes.currentStepButton : classes.stepButton}
            onClick={() => handleStepButton(3)}
          >
            Roles
          </Button>
          <Button
            className={currentStep === 4 ? classes.currentStepButton : classes.stepButton}
            onClick={() => handleStepButton(4)}
          >
            Revision
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}
