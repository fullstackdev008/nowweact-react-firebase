import { primaryColor, blackColor } from 'assets/jss/constants'

const MessageContentStyle = {
  box: {
    marginBottom: '40px',
  },
  card: {
    width: '100%',
    marginBottom: '1px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14)',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftArrow: {
    color: primaryColor,
    fontFamily: 'RobotoMedium',
    fontSize: '30px',
    width: '40px',
    height: '40px',
    borderRadius: '20px',
  },
  iconButton: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
  },
  title: {
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    LineHeight: '24px',
    letterSpacing: '0.1px',
    color: blackColor[2],
    marginBottom: '34px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    paddingRight: '11px',
  },
  subTitle: {
    fontFamily: 'RobotoMedium',
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '1.5px',
    color: blackColor[2],
    marginBottom: '15px',
  },
  text: {
    fontFamily: 'RobotoRegular',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.4px',
    color: '#121212',
  },
  dateTime: {
    textAlign: 'right',
    fontFamily: 'RobotoMedium',
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '1.5px',
    color: 'rgba(163, 161, 161, 0.87)',
  },
  messageSend: {
    borderRadius: '8px',
    boxShadow:
      '0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 16px 24px 2px rgba(0, 0, 0, 0.14)',
  },
  messageSendPaper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '56px',
  },
  writeInput: {
    marginLeft: '34px',
  },
  sendIconButton: {
    color: primaryColor,
  },
}

export default MessageContentStyle
