import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Chip from '@material-ui/core/Chip'
import DoneIcon from '@material-ui/icons/Done'

import RolesData from 'assets/data/RolesData.json'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/CreateProject/RolesStep'
import globalStyles from 'assets/jss/nowweact'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

export default function RolesStep() {
  const classes = useStyles()
  const globalClasses = globalUseStyles()

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
    <Card>
      <CardContent className={globalClasses.cardContent}>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.itemPadding}>
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
          <Grid container className={classes.itemPadding}>
            {roles.map((role, index) => (
              <Grid item xs={4} key={index} className={classes.chipArea}>
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
        </Grid>
      </CardContent>
    </Card>
  )
}
