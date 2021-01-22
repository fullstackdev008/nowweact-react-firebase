import {
  primaryColor,
  lightPrimaryColor,
  secondaryColor,
  whiteColor,
  sidebarWidth,
  headerHeight,
  horizontalPadding,
} from 'assets/jss/constants'

const primaryHeaderStyle = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 44px)', // horizontal padding * 2
    height: headerHeight,
    padding: '0px ' + horizontalPadding,
  },
  logoArea: {
    width: sidebarWidth,
    minWidth: sidebarWidth,
  },
  logo: {
    width: 'auto',
    height: '21px',
  },
  buttonArea: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minWidth: '200px',
  },
  videoButton: {
    width: '120px',
    height: '37px',
    marginRight: '62px',
    backgroundColor: primaryColor,
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
  createBtn: {
    width: '177px',
    height: '37px',
    marginRight: '162px',
    backgroundColor: primaryColor,
    color: whiteColor,
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    lineHeight: 1.14,
    letterSpacing: '1.25px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: lightPrimaryColor,
    },
  },
  alarmBadge: {
    backgroundColor: secondaryColor,
    top: '7px',
    left: '11px',
    height: '7px',
    width: '7px',
    minWidth: '7px',
    borderRadius: '3.5px',
  },
  button: {
    marginLeft: '40px',
    textTransform: 'none',
  },
  icon: {
    width: '24px',
    height: '24px',
    borderRadius: '12px',
    paddingRight: '16px',
  },
}

export default primaryHeaderStyle
