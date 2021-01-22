import React from 'react'

// material ui core components
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

// images
import SmallAvatar from 'assets/images/small-avatar.png'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Message/MessageCard'
const useStyles = makeStyles(styles)

export default function MessageCard(props) {
  const { selectedCard } = props
  const classes = useStyles()
  return (
    <Box justifyContent="center" alignItems="center" className={classes.box}>
      <Card className={[classes.firstCard, selectedCard ? classes.selectedCard : classes.nonSelectedCard].join(' ')}>
        <CardContent className={classes.cardContent}>
          <div className={classes.spaceBetween}>
            <div>
              <img src={SmallAvatar} alt="..." className={classes.avatar} />
            </div>
            <div className={classes.width100}>
              <div className={classes.spaceBetween}>
                <div className={classes.cardTitle}>Green Walley</div>
                <div className={classes.cardReadState} />
              </div>
              <div className={classes.spaceBetween}>
                <div className={classes.cardText}>Bryon Harmonie</div>
                <div className={classes.cardText}>10 Enero</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className={[classes.secondCard, selectedCard ? classes.selectedCard : classes.nonSelectedCard].join(' ')}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, neque vel…
          </div>
        </CardContent>
      </Card>
    </Box>
  )
}
