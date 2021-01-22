import { primaryColor, whiteColor } from 'assets/jss/constants'

const FilterStyle = {
  filterFormControl: {
    marginLeft: '45px',
    borderRadius: `8px`,
    marginTop: '5px',
  },
  filterSelect: {
    height: '40px',
    padding: '5px',
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
}

export default FilterStyle
