import { primaryColor, lightPrimaryColor, blackColor, whiteColor } from 'assets/jss/constants'

const CreateProjectStyle = {
  projectTitle: {
    fontFamily: 'RobotoRegular',
    fontSize: '24px',
    lineHeight: 1,
    letterSpacing: '0.18px',
    textTransform: 'capitalize',
    color: blackColor[2],
    marginTop: '10px',
    marginBottom: '10px',
  },
  buttonArea: {
    display: 'flex',
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
  publishButton: {
    width: '120px',
    height: '40px',
    backgroundColor: primaryColor,
    marginLeft: '24px',
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
  publishIcon: {
    marginRight: '11px',
  },
}

export default CreateProjectStyle
