import { blackColor } from 'assets/jss/constants'

const MessageCardStyle = {
  box: {
    marginBottom: '40px',
  },
  firstCard: {
    width: '100%',
    marginBottom: '1px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
  },
  secondCard: {
    width: '100%',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    boxShadow: '0 0px 0px 0px #fff',
  },
  selectedCard: {
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14)',
  },
  nonSelectedCard: {
    boxShadow: '0 0px 0px 0px #fff',
  },
  cardContent: {
    padding: '17px 12px 16px 21px !important',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    paddingRight: '11px',
  },
  cardTitle: {
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    color: '#9e9da0',
  },
  cardText: {
    fontFamily: 'RobotoMedium',
    fontSize: '10px',
    lineHeight: 1.6,
    letterSpacing: '1.5px',
    color: blackColor[2],
  },
  cardReadState: {
    width: '6px',
    height: '6px',
    borderRadius: '3px',
    backgroundColor: '#7b7d90',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  width100: {
    display: 'block',
    width: '100%',
  },
}

export default MessageCardStyle
