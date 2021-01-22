import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputAdornment from '@material-ui/core/InputAdornment'

import Dropzone from 'components/Dropzone/Dropzone'

// customized components
import StepButtonGroup from 'components/StepButtonGroup/StepButtonGroup'

// images
import people from 'assets/images/icon/people.png'
import flag from 'assets/images/icon/flag.png'

import FlagIcon from 'components/FlagIcon/FlagIcon'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import TypeData from 'assets/data/TypeData.json'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/CreateProject/LinksStep'
import globalStyles from 'assets/jss/nowweact'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

export default function LinksStep() {
  const classes = useStyles()
  const globalClasses = globalUseStyles()

  return (
    <div className={globalClasses.container}>
      <Grid container>
        <Grid item xs={12}>
          <StepButtonGroup currentStep="links" title="H5/Roboto/Regular/24px" />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent className={globalClasses.cardContent}>
              <Grid container>
                <Grid item xs={12} sm={6} className={classes.itemPadding}>
                  <FormControl style={{ width: '100%' }}>
                    <InputLabel id="type">Type</InputLabel>
                    <Select labelId="type" id="type">
                      {TypeData.map((type, index) => (
                        <MenuItem key={index} value={type.id}>
                          {type.type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} className={classes.itemPadding}>
                  <div style={{ display: 'flex' }}>
                    <div className={classes.youtubeLinkButton}>https://</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      <Input
                        id="youtubeLink"
                        fullWidth
                        style={{ paddingLeft: '10px' }}
                        endAdornment={
                          <InputAdornment position="end">
                            <FontAwesomeIcon icon={faLink} className="fa-sm" />
                          </InputAdornment>
                        }
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} className={classes.itemPadding}>
                  <div style={{ display: 'flex' }}>
                    <div className={classes.videoLinkButton}>video link</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      <Input
                        id="videoLink"
                        fullWidth
                        style={{ paddingLeft: '10px' }}
                        endAdornment={
                          <InputAdornment position="end">
                            <FontAwesomeIcon icon={faLink} className="fa-sm" />
                          </InputAdornment>
                        }
                      />
                    </div>
                  </div>
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
              <div className={classes.flexStart}>
                <img src={people} alt="..." className={classes.icon} />
                <div className={classes.displayBlock}>
                  <div className={classes.title}>32</div>
                  <div className={classes.subtitle}>Necessary roles</div>
                </div>
              </div>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: '24px 0px 24px 24px' }}>
            <Button fullWidth className={classes.button}>
              <div className={classes.flexStart}>
                <img src={flag} alt="..." className={classes.icon} />
                <div className={classes.displayBlock}>
                  <div className={classes.title}>United States</div>
                  <div className={classes.subtitle}>Location</div>
                </div>
              </div>
              <FlagIcon country="US" /> {/* add country abbreviation */}
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
