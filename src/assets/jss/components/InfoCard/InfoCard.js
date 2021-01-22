import { whiteColor, blackColor, grayColor } from 'assets/jss/constants'

const infoCardStyle = {
  card: {
    width: '344px',
    // height: '382px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px - 1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)',
    backgroundColor: whiteColor,
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    margin: '16px',
    objectFit: 'cover',
  },
  title: {
    fontFamily: 'RobotoMeidum',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
    color: blackColor[2],
  },
  type: {
    fontFamily: 'RobotoRegular',
    fontSize: '14px',
    lineHeight: '1.43',
    letterSpacing: '0.25px',
    color: grayColor[2],
  },
  image: {
    width: '344px',
    height: '269px',
    objectFit: 'cover',
  },
  roomicon: {
    padding: '16px',
  },
}

export default infoCardStyle
