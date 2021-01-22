import React from 'react'
import RoomIcon from '@material-ui/icons/Room'
// images
import SmallAvatar from 'assets/images/small-avatar.png'
import image from 'assets/images/image.png'

import styles from 'assets/jss/components/InfoCard/InfoCard'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(styles)

export default function InfoCard(props) {
  const classes = useStyles()
  const { data } = props
  return (
    <div className={classes.card}>
      <div className={classes.flex}>
        <div>
          <img src={SmallAvatar} alt="..." className={classes.avatar} />
        </div>
        <div className={classes.block}>
          <div className={classes.title}>{data.title}</div>
          <div className={classes.type}>{data.type}</div>
        </div>
        <div>
          <img src={image} alt="..." className={classes.image} />
        </div>
        <div className={classes.flex}>
          <RoomIcon className={classes.roomicon} />
          {data.title}
        </div>
      </div>
    </div>
  )
}
