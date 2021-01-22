import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'

// customized component
import MsgStepBtnGroup from 'components/Message/MsgStepBtnGroup'
import MessageCard from 'components/Message/MessageCard'
import MessageContent from 'components/Message/MessageContent'
// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Messages/Messages'
import globalStyles from 'assets/jss/nowweact'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

export default function Messages() {
  const classes = useStyles()
  const globalClasses = globalUseStyles()

  return (
    <div className={globalClasses.container}>
      <Grid container>
        <Grid item xs={12}>
          <div className={globalClasses.titleArea}>
            <div className={globalClasses.title}>Messages</div>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <MsgStepBtnGroup currentStep="actives" />
          <MessageCard selectedCard={true} />
          <MessageCard selectedCard={false} />
          <MessageCard selectedCard={false} />
          <MessageCard selectedCard={false} />
          <MessageCard selectedCard={false} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className={classes.messageContainer}>
            <MessageContent />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
