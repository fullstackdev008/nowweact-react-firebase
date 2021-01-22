import React from 'react'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Avatar/Avatar'
const useStyles = makeStyles(styles)

export default function AvatarComponent(props) {
  const classes = useStyles()
  const { avatar } = props
  return (
    <>
      <img src={avatar} className={classes.container} alt="..." />
    </>
  )
}
