import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/CreateProject/GeneralStep'
import globalStyles from 'assets/jss/nowweact'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

export default function GeneralStepCard(props) {
  const { generalInfo, setGeneralInfo, generalRequired, setGeneralRequired } = props
  const classes = useStyles()
  const globalClasses = globalUseStyles()

  const handleInputChange = event => {
    event.persist()
    switch (event.target.id) {
      case 'title':
        setGeneralInfo('title', event.target.value)
        if (event.target.value === '') {
          setGeneralRequired('title', 'required')
        } else {
          setGeneralRequired('title', '')
        }
        break
      case 'country':
        setGeneralInfo('country', event.target.value)
        if (event.target.value === '') {
          setGeneralRequired('country', 'required')
        } else {
          setGeneralRequired('country', '')
        }
        break
      case 'address':
        setGeneralInfo('address', event.target.value)
        if (event.target.value === '') {
          setGeneralRequired('address', 'required')
        } else {
          setGeneralRequired('address', '')
        }
        break
      case 'city':
        setGeneralInfo('city', event.target.value)
        if (event.target.value === '') {
          setGeneralRequired('city', 'required')
        } else {
          setGeneralRequired('city', '')
        }
        break
      case 'zip':
        setGeneralInfo('zip', event.target.value)
        if (event.target.value === '') {
          setGeneralRequired('zip', 'required')
        } else {
          setGeneralRequired('zip', '')
        }
        break
      case 'description':
        setGeneralInfo('description', event.target.value)
        if (event.target.value === '') {
          setGeneralRequired('description', 'required')
        } else {
          setGeneralRequired('description', '')
        }
        break
      case 'goal':
        setGeneralInfo('goal', event.target.value)
        if (event.target.value === '') {
          setGeneralRequired('goal', 'required')
        } else {
          setGeneralRequired('goal', '')
        }
        break
    }
  }

  return (
    <Card>
      <CardContent className={globalClasses.cardContent}>
        <Grid container>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <TextField
              fullWidth
              id="title"
              label="TITLE"
              value={generalInfo.title}
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
              helperText={generalRequired.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.itemPadding}>
            <TextField
              fullWidth
              id="country"
              label="COUNTRY"
              value={generalInfo.country}
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
              helperText={generalRequired.country}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.itemPadding}>
            <TextField
              fullWidth
              id="address"
              label="ADDRESS"
              value={generalInfo.address}
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
              helperText={generalRequired.address}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.itemPadding}>
            <TextField
              fullWidth
              id="city"
              label="CITY"
              value={generalInfo.city}
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
              helperText={generalRequired.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.itemPadding}>
            <TextField
              fullWidth
              id="zip"
              label="ZIP"
              value={generalInfo.zip}
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
              helperText={generalRequired.zip}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <TextField
              fullWidth
              id="description"
              label="DESCRIPTION"
              value={generalInfo.description}
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
              helperText={generalRequired.description}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.itemPadding}>
            <TextField
              fullWidth
              id="goal"
              label="GOAL"
              value={generalInfo.goal}
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
              helperText={generalRequired.goal}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
