import { sidebarWidth, closeSidebarWidth, horizontalPadding, primaryColor, whiteColor } from 'assets/jss/constants'
const SecondaryStyle = {
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  navbar: {
    position: 'relative',
    width: sidebarWidth,
    minWidth: sidebarWidth,
    padding: '0px 0px 0px ' + horizontalPadding,
    transition: 'all .5s',
  },
  closeNavbar: {
    position: 'relative',
    width: closeSidebarWidth,
    minWidth: closeSidebarWidth,
    padding: '0px ' + horizontalPadding + ' 0px ' + horizontalPadding,
    transition: 'all .5s',
  },
  children: {
    width: 'calc(100% - ' + sidebarWidth + ' - 44px)', // 44px is padding * 2
    transition: 'all .5s',
  },
  closeChildren: {
    width: 'calc(100% - ' + closeSidebarWidth + ' - 66px)', // 66px is padding * 2
    transition: 'all .5s',
  },
  closeMenu: {
    position: 'absolute',
    top: '42px',
    right: '-43px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '122px',
    height: '37px',
    backgroundColor: primaryColor,
    color: whiteColor,
    transform: 'rotate(90deg)',
    borderRadius: '0px 0px 8px 8px',
    textTransform: 'capitalize',
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#b0f886',
    },
  },
  clseMenuArrow: {
    color: primaryColor,
    width: '8px',
    height: '8px',
    backgroundColor: primaryColor,
    position: 'absolute',
    top: '0px',
    right: '-8px',
    zIndex: -1,
  },
}

export default SecondaryStyle
