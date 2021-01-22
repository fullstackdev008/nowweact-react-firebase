import { primaryColor } from 'assets/jss/constants'

const AvatarCropperStyle = {
  fileSelectorArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileSelector: {
    width: 'calc(100% - 4px)',
    height: '100%',
    minHeight: '50px',
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: primaryColor,
  },
  avatarArea: {
    marginTop: '20px',
    minHeight: '200px',
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: primaryColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 'auto',
    height: '100%',
    maxHeight: 200,
    objectFit: 'cover',
  },
  cropContainer: {
    position: 'relative',
    width: '100%',
    height: 400,
    background: '#333',
  },
  cropButton: {
    flexShrink: 0,
    marginLeft: 16,
  },
  controls: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  sliderContainer: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
  },
  sliderLabel: {
    minWidth: 65,
  },
  slider: {
    padding: '22px 0px',
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0 16px',
  },
}

export default AvatarCropperStyle
