import React from 'react'

// material ui core components
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

// material ui icons
import TuneIcon from '@material-ui/icons/Tune'

// data
import TypeData from 'assets/data/TypeData.json'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Filter/Filter'
const useStyles = makeStyles(styles)

export default function GoogleMapComponent() {
  const classes = useStyles()
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

  return (
    <FormControl variant="outlined" className={classes.filterFormControl}>
      <InputLabel id="filter-select-label">Filter</InputLabel>
      <Select
        labelId="filter-select-label"
        id="filter-select"
        label="Filter"
        color="primary"
        className={classes.filterSelect}
        MenuProps={menuProps}
        IconComponent={TuneIcon}
        inputProps={{
          classes: {
            icon: classes.icon,
          },
        }}
      >
        {TypeData.map((type, index) => (
          <MenuItem key={index} value={type.id}>
            {type.type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
