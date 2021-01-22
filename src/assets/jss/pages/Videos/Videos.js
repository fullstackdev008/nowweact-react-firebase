import { grayColor } from 'assets/jss/constants'

const VideosStyle = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 'calc(100% - 160px)',
    padding: '40px 80px',
    backgroundColor: grayColor[8],
    borderRadius: '8px',
  },
  subTitle: {
    fontFamily: 'RobotoRegular',
    fontSize: '16px',
    marginTop: '9px',
  },
  description: {
    fontFamily: 'RobotoMedium',
    fontSize: '10px',
    marginTop: '9px',
  },
}

export default VideosStyle
