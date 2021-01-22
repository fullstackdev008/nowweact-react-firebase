import { primaryColor, grayColor } from 'assets/jss/constants'

const DropzoneStyle = {
  dropzone: {
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: primaryColor,
    padding: '23px 17px',
    marginTop: '48px',
  },
  dropzoneFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  uploadIcon: {
    width: '50px',
    height: '35px',
    marginRight: '15px',
  },
  uploadTitle: {
    fontFamily: 'RobotoRegular',
    fontSize: '18.4px',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: grayColor[9],
  },
  uploadSubTitle: {
    marginTop: '5px',
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    lineHeight: 1.14,
    letterSpacing: 1.25,
    color: grayColor[10],
  },
  dropzoneFileType: {
    fontFamily: 'RobotoMedium',
    fontSize: '12px',
    lineHeight: 1.14,
    letterSpacing: 1.25,
    color: grayColor[5],
    marginTop: '15px',
  },
  selectedFiles: {
    marginTop: '10px',
  },
}

export default DropzoneStyle
