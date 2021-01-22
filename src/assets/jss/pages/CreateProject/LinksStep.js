import { primaryColor, blackColor, whiteColor } from 'assets/jss/constants'

const LinksStepStyle = {
  itemPadding: {
    padding: '35px 24px',
  },
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
  youtubeLinkButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '63px',
    height: '36px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    color: '#080808',
  },
  videoLinkButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '93px',
    height: '36px',
    backgroundColor: primaryColor,
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    color: '#080808',
  },
}

export default LinksStepStyle
