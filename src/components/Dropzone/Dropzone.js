import React from 'react'

// material ui core components
import Typography from '@material-ui/core/Typography'

import Dropzone from 'react-dropzone'
// icons
import uploadIcon from 'assets/images/icon/upload.png'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Dropzone/Dropzone'
const useStyles = makeStyles(styles)

export default function DropzoneComponent() {
  const classes = useStyles()
  // dropzone variables and handlers
  const [acceptedFiles, setAcceptedFiles] = React.useState([])
  const addKeyInAcceptedFiles = selectedFiles => {
    setAcceptedFiles(selectedFiles)
  }
  return (
    <Dropzone
      onDrop={selectedFiles => {
        addKeyInAcceptedFiles(selectedFiles)
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div className={classes.dropzone} {...getRootProps()}>
            <div className={classes.root}>
              <input {...getInputProps()} />
              <div className={classes.dropzoneFlex}>
                <div className={classes.dropzoneFlex}>
                  <img src={uploadIcon} alt="..." className={classes.uploadIcon} />
                  <div>
                    <Typography className={classes.uploadTitle}>Upload images</Typography>
                    <Typography className={classes.uploadSubTitle}>1024(w) X 128(h)</Typography>
                  </div>
                </div>
                <div className={classes.dropzoneFlex}>
                  <Typography className={classes.dropzoneFileType}>png, jpg, gif with max size of 5 MB</Typography>
                </div>
              </div>
              <div>
                <strong>
                  {acceptedFiles.map((acceptedFile, index) => (
                    <div key={index} className={classes.selectedFiles}>
                      {acceptedFile.path}
                    </div>
                  ))}
                </strong>
              </div>
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  )
}
