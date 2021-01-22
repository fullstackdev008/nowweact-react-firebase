import React from 'react'
import GoogleMap from 'components/GoogleMap/GoogleMap'

// material ui core components
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/home'

import PlaceData from 'assets/data/PlaceData.json'
import TypeData from 'assets/data/TypeData.json'

const useStyles = makeStyles(styles)

export default function Home() {
  const classes = useStyles()
  const [mapLat, setMapLat] = React.useState(52.165691)
  const [mapLng, setMapLng] = React.useState(10.451526)
  // const [data, setData] = React.useState([])
  const handleDoubleClick = (event, item) => {
    // setData([item])
    setMapLat(Number(item.lat))
    setMapLng(Number(item.lng))
  }
  return (
    <div className={classes.container}>
      <GoogleMap
        PlaceData={PlaceData}
        TypeData={TypeData}
        mapLat={mapLat}
        mapLng={mapLng}
        onDblClick={handleDoubleClick}
      />
      <div className={classes.footer}>
        <Button variant="contained" className={classes.reportButton}>
          Report Issues
        </Button>
        <div className={classes.copyright}>NowWeAct 2021 / All rights reserved</div>
      </div>
    </div>
  )
}
