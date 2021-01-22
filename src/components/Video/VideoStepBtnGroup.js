import React from 'react'

// material ui core components
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Video/VideoStepBtnGroup'
const useStyles = makeStyles(styles)

export default function VideoStepBtnGroup(props) {
  const { currentStep } = props
  const classes = useStyles()
  const handleStepButton = step => {
    switch (step) {
      case 'recents':
        break
      case 'pasts':
        break
      case 'favourites':
        break
    }
  }
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <Box display="flex" justifyContent="space-between" alignItems="flex-end">
        <ButtonGroup className={classes.stepButtonGroup}>
          <Button
            className={currentStep === 'recents' ? classes.currentStepButton : classes.stepButton}
            onClick={() => handleStepButton('recents')}
          >
            Recents
          </Button>
          <Button
            className={currentStep === 'pasts' ? classes.currentStepButton : classes.stepButton}
            onClick={() => handleStepButton('pasts')}
          >
            Pasts
          </Button>
          <Button
            className={currentStep === 'favourites' ? classes.currentStepButton : classes.stepButton}
            onClick={() => handleStepButton('favourites')}
          >
            Favourites
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}
