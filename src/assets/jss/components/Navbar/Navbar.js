import {
  primaryColor,
  blackColor,
  whiteColor,
  grayColor,
  sidebarWidth,
  closeSidebarWidth,
  boxShadow,
} from 'assets/jss/constants'
const NavbarStyle = {
  navbar: {
    position: 'relative',
    width: sidebarWidth,
    minWidth: sidebarWidth,
    display: 'inline-block',
    flexWrap: 'wrap',
    justifyContent: 'center',
    transition: 'all .5s',
  },
  closeNavBar: {
    position: 'relative',
    width: closeSidebarWidth,
    minWidth: closeSidebarWidth,
    display: 'inline-block',
    flexWrap: 'wrap',
    justifyContent: 'center',
    transition: 'all .5s',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    minWidth: '100%',
  },
  fullWidth: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  userBadge: {
    backgroundColor: primaryColor,
    color: whiteColor,
    top: '50px',
    left: '25px',
    height: '24px',
    width: '24px',
    borderRadius: '12px',
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    ...boxShadow,
  },
  avatar: {
    width: '134px',
    height: '134px',
    margin: '30px 0px 27px 0px',
    transition: 'all .5s',
  },
  closeAvatar: {
    width: '108px',
    height: '108px',
    margin: '30px 0px 27px 0px',
    transition: 'all .5s',
  },
  userAvatar: {
    width: '120px',
    height: '120px',
    borderRadius: '60px',
    position: 'absolute',
    top: '37px',
    left: '7px',
    transition: 'all .5s',
    objectFit: 'cover',
  },
  closeUserAvatar: {
    width: '96px',
    height: '96px',
    borderRadius: '48px',
    position: 'absolute',
    top: '36px',
    left: '6px',
    transition: 'all .5s',
    objectFit: 'cover',
  },
  userName: {
    fontFamily: 'RobotoRegular',
    fontSize: '16px',
    lineHeight: '24px',
    color: blackColor[2],
  },
  cityName: {
    fontFamily: 'RobotoRegular',
    fontSize: '14px',
    color: grayColor[5],
  },
  navItem: {
    marginTop: '30px',
    width: '288px',
    cursor: 'pointer',
    transition: 'all .5s',
  },
  closeNavItem: {
    marginTop: '30px',
    width: '61px',
    cursor: 'pointer',
    transition: 'all .5s',
  },
  navUl: {
    paddingLeft: '0px',
    border: '1px solid #d1d0d0',
    borderRadius: '8px',
  },
  active: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '308px',
    height: '56px',
    borderRadius: '8px',
    marginLeft: '-12px',
    backgroundColor: whiteColor,
    ...boxShadow,
    transition: 'all .5s',
  },
  closeActive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '56px',
    borderRadius: '8px',
    marginLeft: '-12px',
    backgroundColor: whiteColor,
    ...boxShadow,
    transition: 'all .5s',
  },
  navLi: {
    height: '56px',
    display: 'flex',
    paddingLeft: '20px',
  },
  navATag: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
    color: grayColor[5],
    '&:hover, &:focus': { color: primaryColor },
  },
  navASelectedTag: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
    paddingLeft: '17px',
    color: grayColor[5],
    borderWidth: '4px',
    borderLeftStyle: 'solid',
    borderLeftColor: primaryColor,
    backgroundColor: whiteColor,
    '&:hover, &:focus': { color: primaryColor },
  },
  leftDiv: {
    width: '10px',
    backgroundColor: whiteColor,
    height: '56px',
    borderRadius: '8px 0px 0px 8px',
    transition: 'all .5s',
  },
  closeLeftDiv: {
    width: '14px',
    backgroundColor: whiteColor,
    height: '56px',
    borderRadius: '8px 0px 0px 8px',
    transition: 'all .5s',
  },
  rightDiv: {
    width: '10px',
    backgroundColor: whiteColor,
    height: '56px',
    borderRadius: '0px 8px 8px 0px',
  },
  emptyDiv: {
    width: '0px',
    height: '56px',
  },
  navText: {
    fontFamily: 'RobotoRegular',
    fontSize: '14px',
    marginLeft: '20px',
  },
  mailBadge: {
    backgroundColor: primaryColor,
    color: whiteColor,
    top: '2px',
    left: '8px',
    height: '14px',
    width: '14px',
    borderRadius: '7px',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderColor: whiteColor,
    fontFamily: 'RobotoRegular',
    fontSize: '14px',
    ...boxShadow,
  },
  mailCountBadge: {
    backgroundColor: primaryColor,
    right: '18px',
    color: whiteColor,
    fontFamily: 'RobotoRegular',
    fontSize: '14px',
    ...boxShadow,
  },
  icon: {
    width: '24px',
    height: 'auto',
  },
}

export default NavbarStyle
