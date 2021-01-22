import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Cropper from 'react-easy-crop'
import getCroppedImg from './CropImage'
// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Profile/AvatarCropper'
import globalStyles from 'assets/jss/nowweact'
const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

export default function AvatarCropper(props) {
  const classes = useStyles()
  const globalClasses = globalUseStyles()

  const { getAvatar, avatar } = props

  const [dogImg, setDogImg] = React.useState('')
  const [crop, setCrop] = React.useState({ x: 0, y: 0 })
  const [rotation, setRotation] = React.useState(0)
  const [zoom, setZoom] = React.useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null)
  const [croppedImage, setCroppedImage] = React.useState(null)

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => setDogImg(reader.result))
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const onCropComplete = React.useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = React.useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(dogImg, croppedAreaPixels, rotation)
      setCroppedImage(croppedImage)
      getAvatar(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels, rotation, dogImg, getAvatar])

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Box mt={2} mr={4}>
          <div className={classes.fileSelectorArea}>
            <input type="file" accept="image/*" onChange={onSelectFile} className={classes.fileSelector} />
          </div>
          <div className={classes.avatarArea}>
            {croppedImage !== null ? (
              <img src={croppedImage} alt="..." className={classes.avatar} />
            ) : (
              <img src={avatar} alt="..." className={classes.avatar} />
            )}
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Box mt={2} mx={0}>
          <div className={classes.cropContainer}>
            <Cropper
              image={dogImg}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className={classes.controls}>
            <div className={classes.sliderContainer}>
              <Typography variant="overline" className={classes.sliderLabel}>
                Zoom
              </Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                className={classes.slider}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
            <div className={classes.sliderContainer}>
              <Typography variant="overline" className={classes.sliderLabel}>
                Rotation
              </Typography>
              <Slider
                value={rotation}
                min={0}
                max={360}
                step={1}
                aria-labelledby="Rotation"
                className={classes.slider}
                onChange={(e, rotation) => setRotation(rotation)}
              />
            </div>
            <Button onClick={showCroppedImage} className={globalClasses.button}>
              Show Result
            </Button>
          </div>
        </Box>
      </Grid>
    </Grid>
  )
}
