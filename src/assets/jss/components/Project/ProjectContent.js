import { primaryColor, blackColor, whiteColor, grayColor } from 'assets/jss/constants'

const ProjectContentStyle = {
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
  container: {
    padding: '10px 55px 65px 65px',
  },
  titleArea: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'RobotoMedium',
    fontSize: '24px',
    LineHeight: '24px',
    letterSpacing: '0.18px',
    color: blackColor[2],
  },
  titleEditBtn: {
    color: primaryColor,
  },
  titleEditIcon: {
    color: primaryColor,
  },
  approveBtn: {
    color: whiteColor,
    backgroundColor: primaryColor,
  },
  videoContainer: {
    padding: '22px 0px 22px 0px',
  },
  videoTitle: {
    fontFamily: 'RobotoMedium',
    fontSize: '20px',
    LineHeight: 1.2,
    letterSpacing: '0.18px',
    color: blackColor[2],
  },
  videoSubTitle: {
    paddingTop: '16px',
    fontFamily: 'RobotoMedium',
    fontSize: '16px',
    letterSpacing: '0.18px',
    color: blackColor[2],
  },
  buttonsArea: {
    paddingTop: '64px',
    paddingBottom: '64px',
  },
  subTitle14: {
    paddingTop: '16px',
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    letterSpacing: '0.18px',
    color: blackColor[2],
  },
  volunteerDescArea: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '17px 0px 16px 0px',
    alignItems: 'center',
  },
  volunteerImg: {
    width: '100px',
    height: '56px',
    objectFit: 'cover',
    marginRight: '16px',
  },
  volunteerTitle: {
    fontFamily: 'RobotoRegular',
    fontSize: '16px',
    LineHeight: 1.5,
    letterSpacing: '0.18px',
    color: blackColor[2],
  },
  volunteerText: {
    fontFamily: 'RobotoRegular',
    fontSize: '14px',
    LineHeight: 1.5,
    letterSpacing: '0.18px',
    color: blackColor[2],
  },
  volunteerSelectArea: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px',
  },
  volunteerAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    objectFit: 'cover',
    paddingRight: '16px',
  },
  volunteerRadio: {
    width: '100%',
    borderBottom: '1px solid #dfe0e0',
    justifyContent: 'space-between',
  },
  radio: {
    color: primaryColor,
    '&:checked': {
      color: primaryColor,
      backgroundColor: primaryColor,
    },
  },
  radioIcon: {
    color: primaryColor,
  },

  rolePadding: {
    paddingTop: '30px',
    paddingBottom: '30px',
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

export default ProjectContentStyle
