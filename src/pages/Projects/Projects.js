import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'

// customized component
import MsgStepBtnGroup from 'components/Message/MsgStepBtnGroup'
import MessageCard from 'components/Message/MessageCard'
import ProjectContent from 'components/Project/ProjectContent'
// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Projects/Projects'
import globalStyles from 'assets/jss/nowweact'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

export default function Projects() {
  const classes = useStyles()
  const globalClasses = globalUseStyles()

  const [showNav, setShowNav] = React.useState(true)
  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className={globalClasses.container}>
      <Grid container>
        <Grid item xs={12}>
          <div className={globalClasses.titleArea}>
            <div className={globalClasses.title}>Projects</div>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <div className={showNav ? classes.projectNavArea : classes.projectEmptyNavArea}>
          <div style={{ display: showNav ? 'flex' : 'none' }}>
            <MsgStepBtnGroup currentStep="actives" />
          </div>
          <MessageCard selectedCard={true} />
          <MessageCard selectedCard={false} />
          <MessageCard selectedCard={false} />
          <MessageCard selectedCard={false} />
          <MessageCard selectedCard={false} />
        </div>
        <div className={showNav ? classes.projectContainer : classes.projectFullContainer}>
          <ProjectContent showNav={showNav} handleShowNav={handleShowNav} />
        </div>
      </Grid>
    </div>
  )
}
