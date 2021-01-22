import { primaryColor, whiteColor } from 'assets/jss/constants'

const GoogleMapStyle = {
  search: {
    width: '100%',
    minWidth: '200px',
    backgroundColor: whiteColor,
  },
  searchBox: {
    backgroundColor: whiteColor,
    marginTop: '18px',
    marginLeft: '36px',
    width: `776px`,
    height: `56px`,
    borderRadius: `8px`,
  },
  filterFormControl: {
    marginTop: '18px',
    marginLeft: '36px',
    borderRadius: `8px`,
  },
  filterSelect: {
    backgroundColor: whiteColor,
    borderColor: primaryColor,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: `8px`,
    minWidth: '200px',
  },
  icon: {
    fill: primaryColor,
    color: primaryColor,
    right: 12,
    position: 'absolute',
    userSelect: 'none',
    pointerEvents: 'none',
  },
  paper: {
    borderRadius: 8,
    marginTop: 16,
  },
  list: {
    paddingTop: 8,
    paddingBottom: 8,
    background: 'white',
    '& li': {
      fontWeight: 200,
      paddingTop: 12,
      paddingBottom: 12,
    },
    '& li:hover': {
      background: whiteColor,
    },
    '& li.Mui-selected': {
      background: whiteColor,
    },
    '& li.Mui-selected:hover': {
      background: whiteColor,
    },
  },
  infoWindow: {
    padding: '0px',
  },
}

export default GoogleMapStyle
