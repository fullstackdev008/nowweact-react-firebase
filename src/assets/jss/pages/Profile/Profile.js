import { primaryColor, blackColor, whiteColor } from 'assets/jss/constants'

const ProfileStyle = {
  itemPadding: {
    padding: '0px 24px',
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
  changepwdButton: {
    marginTop: '30px',
    width: '201px',
    height: '36px',
    fontSize: '14px',
    textTransform: 'none',
  },
  avatar: {
    marginTop: '48px',
    padding: '0px 24px',
    height: '220px',
    objectFit: 'cover',
    borderColor: primaryColor,
    borderStyle: 'dashed',
    borderWidth: '2px',
  },
  approveIcon: {
    marginRight: '16px',
  },
}

export default ProfileStyle
