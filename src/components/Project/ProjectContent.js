import React from 'react'

// material ui core components
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Chip from '@material-ui/core/Chip'
import DoneIcon from '@material-ui/icons/Done'

import ReactWebMediaPlayer from 'react-web-media-player'

// material ui icons
import EditIcon from '@material-ui/icons/Edit'

// images
import Volunteer from 'assets/images/image.png'
import VolunteerAvatar from 'assets/images/small-avatar.png'

// data
import VolunteerData from 'assets/data/VolunteerData.json'
import RolesData from 'assets/data/RolesData.json'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Project/ProjectContent'
import globalStyles from 'assets/jss/nowweact'
const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

export default function ProjectContent(props) {
  const classes = useStyles()
  const globalClasses = globalUseStyles()

  const { showNav, handleShowNav } = props

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  }

  // roles data
  const [rolesData, setRolesData] = React.useState(RolesData)
  // selected roles
  const [roles, setRoles] = React.useState([])

  const handleAddRoles = event => {
    let count = 0
    for (var i = 0; i < roles.length; i++) {
      if (RolesData[event.target.value] === roles[i]) {
        count++
      }
    }
    if (count === 0) {
      // add selected role into selected roles array
      setRoles(roles => [...roles, RolesData[event.target.value]])
      // remove selected role from all Roles data array.
      setRolesData(rolesData.filter(role => role.id !== event.target.value))
    } else {
      alert('You select role again.')
    }
  }
  const handleDeleteRole = selectedRole => {
    // remove selected role from selected roles array
    setRoles(roles.filter(role => role.id !== selectedRole.id))
    // add selected role into all roles data array
    setRolesData(rolesData => [...rolesData, selectedRole])
  }
  return (
    <Box justifyContent="center" alignItems="center" className={classes.box}>
      <Card className={classes.card}>
        <div className={classes.spaceBetween}>
          <IconButton className={classes.leftArrow} onClick={() => handleShowNav()}>
            {showNav ? '«' : '»'}
          </IconButton>
        </div>
        <CardContent className={classes.container}>
          <Grid container justify="space-between" alignItems="center">
            <div className={classes.titleArea}>
              <div className={classes.title}>Project Title</div>
              <IconButton className={classes.titleEditBtn}>
                <EditIcon className={classes.titleEditIcon} />
              </IconButton>
            </div>
            <Button className={globalClasses.button}>approve changes</Button>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={showNav ? 12 : 6}>
              {/* video part */}
              <div className={classes.videoContainer}>
                <ReactWebMediaPlayer
                  width="100%"
                  height="auto"
                  video="https://any-link.com/my-video.mp4"
                  thumbnail="https://any-link.com/video-thumbnail.jpg"
                />
              </div>
              <div className={classes.videoTitle}>Video Title</div>
              <div className={classes.videoSubTitle}>Video SubTitle</div>
              {/* buttons part */}
              <div className={[classes.spaceBetween, classes.buttonsArea].join(' ')}>
                <Button className={globalClasses.button}>JOIN TO TEAM</Button>
                <Button className={globalClasses.button}>SEND A MESSAGE</Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={showNav ? 12 : 6} style={{ paddingLeft: showNav ? '0px' : '80px' }}>
              {/* volunteer part */}
              <div className={classes.subTitle14}>Volunteers</div>
              <div className={classes.volunteerDescArea}>
                <img src={Volunteer} alt="..." className={classes.volunteerImg} />
                <div>
                  <div className={classes.volunteerTitle}>Three-line item</div>
                  <div className={classes.volunteerText}>Lorem ipsum dolor sit amet, consectetur </div>
                </div>
              </div>
              <div style={{ width: '100%' }}>
                {VolunteerData.map((Volunteer, index) => (
                  <div key={index} className={classes.volunteerSelectArea}>
                    <div>
                      <img src={VolunteerAvatar} alt="..." className={classes.volunteerAvatar} />
                    </div>
                    <FormControlLabel
                      value={Volunteer.id}
                      control={<Radio color="default" className={classes.radio} />}
                      label={Volunteer.name}
                      labelPlacement="start"
                      className={classes.volunteerRadio}
                    />
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={showNav ? 12 : 6}>
              {/* role part */}
              <Grid item xs={12} sm={6} className={classes.rolePadding}>
                <FormControl style={{ width: '100%' }}>
                  <InputLabel id="roles">Roles</InputLabel>
                  <Select labelId="Roles" id="roles" label="Roles" MenuProps={menuProps} onChange={handleAddRoles}>
                    {rolesData.map((role, index) => (
                      <MenuItem key={index} value={role.id} className={classes.rolesMenu}>
                        {role.type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid container className={classes.rolePadding}>
                {roles.map((role, index) => (
                  <Grid item xs={6} key={index} className={classes.chipArea}>
                    <Chip
                      icon={<DoneIcon />}
                      key={index}
                      label={role.type}
                      onDelete={() => handleDeleteRole(role)}
                      color="primary"
                      classes={{ root: classes.chip, deleteIcon: classes.chipDeleteIcon, icon: classes.chipIcon }}
                    />
                  </Grid>
                ))}
              </Grid>
              {/* role part end */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}
