import React from 'react'

// material ui core components
import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

// customized components
import VideoStepBtnGroup from 'components/Video/VideoStepBtnGroup'
import Filter from 'components/Filter/Filter'

import ReactWebMediaPlayer from 'react-web-media-player'

// material ui icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Videos/Videos'
import globalStyles from 'assets/jss/nowweact'

const useStyles = makeStyles(styles)
const globalUseStyles = makeStyles(globalStyles)

export default function Videos() {
  const classes = useStyles()
  const globalClasses = globalUseStyles()

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <div className={globalClasses.titleArea}>
            <div>
              <div className={globalClasses.title}>Videos</div>
              <div className={classes.description}>Video description</div>
            </div>
            <div style={{ display: 'flex' }}>
              <VideoStepBtnGroup currentStep="recents" />
              <Filter />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <ReactWebMediaPlayer
            width="100%"
            height="auto"
            video="https://any-link.com/my-video.mp4"
            thumbnail="https://any-link.com/video-thumbnail.jpg"
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" my={1}>
            <div className={classes.subTitle}>SubTitle</div>
            <Button className={globalClasses.button} style={{ paddingLeft: '10px', paddingRight: '14px' }}>
              <PlayArrowIcon />
              Play
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.description}>
            This ia a video description. This ia a video description. This ia a video description. This ia a video
            description.
          </div>
        </Grid>
        {/* sub videos */}

        <Grid item xs={12}>
          <Box my={2} mx={-1}>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <Box mx={1}>
                  <ReactWebMediaPlayer
                    width="100%"
                    height="auto"
                    video="https://any-link.com/my-video.mp4"
                    thumbnail="https://any-link.com/video-thumbnail.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box mx={1}>
                  <ReactWebMediaPlayer
                    width="100%"
                    height="auto"
                    video="https://any-link.com/my-video.mp4"
                    thumbnail="https://any-link.com/video-thumbnail.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box mx={1}>
                  <ReactWebMediaPlayer
                    width="100%"
                    height="auto"
                    video="https://any-link.com/my-video.mp4"
                    thumbnail="https://any-link.com/video-thumbnail.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box mx={1}>
                  <ReactWebMediaPlayer
                    width="100%"
                    height="auto"
                    video="https://any-link.com/my-video.mp4"
                    thumbnail="https://any-link.com/video-thumbnail.jpg"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
