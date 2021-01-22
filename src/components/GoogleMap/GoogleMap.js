import React from 'react'
import { GoogleMap, LoadScript, StandaloneSearchBox, Marker, InfoWindow } from '@react-google-maps/api'
import InfoCard from 'components/InfoCard/InfoCard'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import SearchIcon from '@material-ui/icons/Search'
import TuneIcon from '@material-ui/icons/Tune'
import MarkerIcon from 'assets/images/icon/marker-green.png'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/GoogleMap/GoogleMap'
import { mapHeight, primaryColor } from 'assets/jss/constants'

// import google map styles json data
import googleMapStyles from 'assets/data/GoogleMapStylesData.json'

const useStyles = makeStyles(styles)

const containerStyle = {
  width: '100%',
  height: mapHeight,
  margin: '0px 70px',
}

const center = {
  lat: 51.50511,
  lng: -0.10009,
}
const SearchTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: primaryColor,
      },
      '&:hover fieldset': {
        borderColor: primaryColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: primaryColor,
      },
    },
  },
})(TextField)

export default function GoogleMapComponent(props) {
  const classes = useStyles()
  const { PlaceData, TypeData, onDblClick } = props
  const [selectedPlace, setSelectedPlace] = React.useState(null)
  const [markerMap, setMarkerMap] = React.useState({})
  const [zoom, setZoom] = React.useState(12)
  const [infoOpen, setInfoOpen] = React.useState(false)
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

  // We have to create a mapping of our places to actual Marker objects
  const markerLoadHandler = (marker, place) => {
    return setMarkerMap(prevState => {
      return { ...prevState, [place.id]: marker }
    })
  }

  const markerClickHandler = (event, place) => {
    // Remember which place was clicked
    setSelectedPlace(place)

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false)
    }

    if (infoOpen) {
      setInfoOpen(false)
    }
    setInfoOpen(true)

    // If you want to zoom in a little on marker click
    if (zoom < 6) {
      setZoom(6)
    }

    // if you want to center the selected Marker
    // setCenter(place.pos)
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY} libraries={['places']}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        options={{
          fullscreenControl: false,
          zoomControl: true,
          zoomControlOptions: { position: 9 },
          scrollwheel: true,
          streetViewControl: false,
          mapTypeControl: false,
          styles: googleMapStyles,
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <StandaloneSearchBox id="searchBox">
            <div className={classes.search}>
              <SearchTextField
                id="search-textarea"
                placeholder="Search..."
                fullWidth
                className={classes.searchBox}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ fill: primaryColor }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </StandaloneSearchBox>
          <FormControl variant="outlined" className={classes.filterFormControl}>
            <InputLabel id="filter-select-label">Filter</InputLabel>
            <Select
              labelId="filter-select-label"
              id="filter-select"
              label="Filter"
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
        </div>
        {PlaceData.map(place => (
          <Marker
            key={place.id}
            position={{ lat: Number(place.lat), lng: Number(place.lng) }}
            onLoad={marker => markerLoadHandler(marker, place)}
            onClick={event => markerClickHandler(event, place)}
            onDblClick={event => onDblClick(event, place)}
            icon={MarkerIcon}
          />
        ))}
        {infoOpen && selectedPlace && (
          <InfoWindow
            anchor={markerMap[selectedPlace.id]}
            onCloseClick={() => setInfoOpen(false)}
            className={classes.infoWindow}
          >
            <InfoCard data={selectedPlace} />
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}
