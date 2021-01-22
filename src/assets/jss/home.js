import { footerHeight, grayColor, whiteColor, horizontalPadding } from 'assets/jss/constants'
const homeStyle = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: 'calc(100% - 44px)', // horizontal padding * 2
    padding: '0px ' + horizontalPadding,
  },
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: footerHeight,
    padding: '0px 70px',
  },
  reportButton: {
    width: '152px',
    height: '36px',
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    lineHeight: '16px',
    LetterSpacing: '1.25px',
    color: grayColor[3],
    textTransform: 'capitalize',
    border: '1px solid #797777',
    backgroundColor: whiteColor,
    boxShadow: '0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0)',
  },
  copyright: {
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: grayColor[1],
  },
}

export default homeStyle
