import React from 'react'

// material ui core components
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'

// material icons
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import SendIcon from '@material-ui/icons/Send'
// images
import SmallAvatar from 'assets/images/small-avatar.png'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Message/MessageContent'
const useStyles = makeStyles(styles)

export default function MessageContent() {
  const classes = useStyles()
  return (
    <Box justifyContent="center" alignItems="center" className={classes.box}>
      <Card className={classes.card}>
        <div className={classes.spaceBetween}>
          <div>
            <IconButton className={classes.leftArrow}>«</IconButton>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <IconButton className={classes.iconButton}>✉</IconButton>
            </div>
            <div>
              <IconButton className={classes.iconButton}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <Divider />
        <CardContent className={classes.cardContent}>
          <div className={classes.title}>Green Walley</div>
          <Grid container>
            <Grid item xs={12} sm={1}>
              <img src={SmallAvatar} alt="..." className={classes.avatar} />
            </Grid>
            <Grid item xs={12} sm={9}>
              <div className={classes.subTitle}>Bryon Harmonie</div>
              <div className={classes.text}>
                Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem
                pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id
                vitae erat.
                <br />
                <br />
                Nulla mollis sapien sollicitudin lacinia lacinia. Vivamus facilisis dolor et massa placerat, at
                vestibulum nisl egestas. Nullam rhoncus lacus non odio luctus, eu condimentum mauris ultrices. Praesent
                blandit, augue a posuere aliquam, arcu tortor feugiat turpis, quis lacinia augue sapien at tellus.
                <br />
                <br />
                Cras ut erat magna. Morbi nibh ante, condimentum vestibulum tempus a, tristique et velit. Sed semper
                aliquet ante. Quisque tempus arcu sapien, id convallis turpis dictum quis. Nunc commodo vitae risus sit
                amet sollicitudin. Sed id facilisis sem.
                <br />
                <br />
                Nulla mollis sapien sollicitudin lacinia lacinia. Vivamus facilisis dolor et massa placerat, at
                vestibulum nisl egestas. Nullam rhoncus lacus non odio luctus, eu condimentum mauris ultrices. Praesent
                blandit, augue a posuere aliquam, arcu tortor feugiat turpis, quis lacinia augue sapien at tellus.
                <br />
                <br />
                Nulla mollis sapien sollicitudin .
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div className={classes.dateTime}>13 January 14:49</div>
            </Grid>
          </Grid>
          <div className={classes.messageSend}>
            <Paper className={classes.messageSendPaper}>
              <InputBase color="secondary" className={classes.writeInput} fullWidth placeholder="Write..." />
              <IconButton>
                <AttachFileIcon />
              </IconButton>
              <IconButton className={classes.sendIconButton}>
                <SendIcon />
              </IconButton>
            </Paper>
          </div>
        </CardContent>
      </Card>
    </Box>
  )
}
