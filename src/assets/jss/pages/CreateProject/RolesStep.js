import { primaryColor, blackColor, whiteColor, grayColor } from 'assets/jss/constants'

const RolesStepStyle = {
  itemPadding: {
    padding: '35px 24px',
  },
  rolesMenu: {},
  inputRoot: {
    fontFamily: 'RobotoRegular',
    fontSize: '16px',
  },
  labelRoot: {
    fontFamily: 'RobotoRegular',
    fontSize: '16px',
  },
  button: {
    backgroundColor: whiteColor,
    display: 'flex',
    justifyContent: 'space-between',
    height: '118px',
    padding: '24px',
  },
  flexStart: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: '70px',
    height: '70px',
    marginRight: '24px',
  },
  flagIcon: {
    width: '30px',
    height: '30px',
  },
  title: {
    textAlign: 'left',
    fontFamily: 'RobotoMedium',
    fontSize: '24px',
    lineHeight: 1,
    letterSpacing: '0.18px',
    textTransform: 'capitalize',
    color: blackColor[2],
  },
  subtitle: {
    textAlign: 'left',
    fontFamily: 'RobotoMedium',
    fontSize: '13px',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1,
    letterSpacing: '0.18px',
    textTransform: 'capitalize',
    color: blackColor[2],
  },
  chipArea: {
    width: '100%',
    padding: '13px 10px',
  },
  chip: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    color: blackColor[2],
    backgroundColor: whiteColor,
    border: '1px solid' + primaryColor,
    '&:hover': {
      backgroundColor: grayColor[11],
      justifyContent: 'space-between',
      '& $chipDeleteIcon': {
        color: grayColor[2],
      },
      '& $chipIcon': {
        display: 'none',
      },
    },
  },
  chipDeleteIcon: {
    color: whiteColor,
  },
  chipIcon: {
    width: '16px',
    height: '16px',
    borderRadius: '8px',
    padding: '2px',
    backgroundColor: primaryColor,
  },
}

export default RolesStepStyle
