import { primaryColor, blackColor, whiteColor, grayColor } from 'assets/jss/constants'

const LogindialogStyle = {
  container: {
    display: 'block',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '27px 33px 18px 28px',
    backgroundColor: whiteColor,
    zIndex: 2,
    position: 'absolute',
    top: 80,
    right: 29,
    boxShadow:
      '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)',
    borderRadius: '4px',
  },
  closeButtonPos: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    color: primaryColor,
  },
  closeButton: {
    color: primaryColor,
    fontSize: '17px',
    fontWeight: 100,
  },
  title: {
    fontFamily: 'RobotoMedium',
    fontSize: '20px',
    lineHeight: 1.2,
    letterSpacing: '0.15px',
    color: blackColor[2],
  },
  subTitle: {
    fontFamily: 'RobotoRegular',
    fontSize: '14px',
    lineHeight: 1.43,
    letterSpacing: '0.25px',
    color: grayColor[2],
    marginBottom: '60px',
  },
  textFieldArea: {
    width: '328px',
    marginBottom: '15px',
  },
  buttonGroupArea: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '40px',
  },
  button: {
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    color: primaryColor,
    marginLeft: '30px',
  },
}

export default LogindialogStyle
