import { primaryColor, lightPrimaryColor, whiteColor, blackColor } from 'assets/jss/constants'

const VideoStepBtnGroupStyle = {
  title: {
    fontFamily: 'RobotoRegular',
    fontSize: '24px',
    lineHeight: 1,
    letterSpacing: '0.18px',
    color: blackColor[2],
  },
  stepButtonGroup: {
    height: '40px',
    borderRadius: '8px',
  },
  stepButton: {
    width: '90px',
    height: '40px',
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '1.25px',
    color: '#848080',
    textTransform: 'capitalize',
  },
  currentStepButton: {
    width: '90px',
    height: '40px',
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '1.25px',
    color: '#848080',
    textTransform: 'capitalize',
    backgroundColor: whiteColor,
  },
  publishButton: {
    width: '120px',
    height: '40px',
    backgroundColor: primaryColor,
    marginLeft: '24px',
    color: whiteColor,
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    lineHeight: '1.14',
    letterSpacing: '1.25px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: lightPrimaryColor,
    },
  },
  publishIcon: {
    marginRight: '11px',
  },
}

export default VideoStepBtnGroupStyle
