import React from 'react'

// material ui core components
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Message/MsgStepBtnGroup'
const useStyles = makeStyles(styles)

export default function MsgStepBtnGroup(props) {
  const { currentStep } = props
  const classes = useStyles()
  const handleStepButton = step => {
    switch (step) {
      case 'actives':
        break
      case 'past':
        break
      case 'all':
        break
    }
  }
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" className={classes.box}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-end">
        <ButtonGroup className={classes.stepButtonGroup}>
          <Button
            className={currentStep === 'actives' ? classes.currentStepButton : classes.stepButton}
            onClick={() => handleStepButton('actives')}
          >
            Actives
          </Button>
          <Button
            className={currentStep === 'past' ? classes.currentStepButton : classes.stepButton}
            onClick={() => handleStepButton('past')}
          >
            Past
          </Button>
          <Button
            className={currentStep === 'all' ? classes.currentStepButton : classes.stepButton}
            onClick={() => handleStepButton('all')}
          >
            All
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}
