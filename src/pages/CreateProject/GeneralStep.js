import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Dropzone from 'components/Dropzone/Dropzone'

// customized components
import StepButtonGroup from 'components/StepButtonGroup/StepButtonGroup'

// images
import people from 'assets/images/icon/people.png'
import flag from 'assets/images/icon/flag.png'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/CreateProject/GeneralStep'
import globalStyles from 'assets/jss/nowweact'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

export default function GeneralStep() {
  const classes = useStyles()
  const globalClasses = globalUseStyles()

  return (
    <div className={globalClasses.container}>
      <Grid container>
        <Grid item xs={12}>
          <StepButtonGroup currentStep="general" title="" />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent className={globalClasses.cardContent}>
              <Grid container>
                <Grid item xs={12} sm={12} className={classes.itemPadding}>
                  <TextField
                    fullWidth
                    id="title"
                    label="TITLE"
                    defaultValue=""
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.itemPadding}>
                  <TextField
                    fullWidth
                    id="country"
                    label="COUNTRY"
                    defaultValue=""
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.itemPadding}>
                  <TextField
                    fullWidth
                    id="address"
                    label="ADDRESS"
                    defaultValue=""
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.itemPadding}>
                  <TextField
                    fullWidth
                    id="city"
                    label="CITY"
                    defaultValue=""
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.itemPadding}>
                  <TextField
                    fullWidth
                    id="zip"
                    label="ZIP"
                    defaultValue=""
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.itemPadding}>
                  <TextField
                    fullWidth
                    id="description"
                    label="DESCRIPTION"
                    defaultValue=""
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                  />
                </Grid>
                <Grid item sm={12} md={12} lg={7} className={classes.itemPadding}>
                  <Dropzone />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: '24px 24px 24px 0px' }}>
            <Button fullWidth className={classes.button}>
              <img src={people} alt="..." className={classes.icon} />
              <div className={classes.displayBlock}>
                <div className={classes.title}>Not activated</div>
                <div className={classes.subtitle}>Social media</div>
              </div>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: '24px 0px 24px 24px' }}>
            <Button fullWidth className={classes.button}>
              <img src={flag} alt="..." className={classes.icon} />
              <div className={classes.displayBlock}>
                <div className={classes.title}>Activate</div>
                <div className={classes.subtitle}>Report button</div>
              </div>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
