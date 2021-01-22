import { blackColor, whiteColor } from 'assets/jss/constants'

const GeneralStepStyle = {
  itemPadding: {
    padding: '12px 24px',
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
    justifyContent: 'flex-start',
    height: '118px',
    padding: '24px',
  },
  icon: {
    width: '70px',
    height: '70px',
    marginRight: '24px',
  },
  displayBlock: {
    display: 'block',
  },
  title: {
    textAlign: 'left',
    fontFamily: 'RobotoRegular',
    fontSize: '24px',
    lineHeight: 1,
    letterSpacing: '0.18px',
    textTransform: 'capitalize',
    color: blackColor[2],
  },
  subtitle: {
    textAlign: 'left',
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    lineHeight: 1,
    letterSpacing: '0.18px',
    textTransform: 'capitalize',
    color: blackColor[2],
  },
}

export default GeneralStepStyle
