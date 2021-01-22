import React from 'react'
// material ui core components
import Badge from '@material-ui/core/Badge'
import { Typography } from '@material-ui/core'
// images and icons
import Avatar from 'assets/images/avatar.png'
import HomeGrayIcon from 'assets/images/icon/home-gray.png'
import NewProjectGrayIcon from 'assets/images/icon/new-project-gray.png'
import NewProjectGreenIcon from 'assets/images/icon/new-project-green.png'
import MessageGrayIcon from 'assets/images/icon/message-gray.png'
import MessageGreenIcon from 'assets/images/icon/message-green.png'
import ProjectGrayIcon from 'assets/images/icon/project-gray.png'
import ProjectGreenIcon from 'assets/images/icon/project-green.png'
import ProfileGrayIcon from 'assets/images/icon/profile-gray.png'
import ProfileGreenIcon from 'assets/images/icon/profile-green.png'

import { useHistory } from 'react-router-dom'
// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Navbar/Navbar'

// firebase queries
import { getCurrentUserQuery } from 'firebase/utils/query/auth'
import { getProfileQuery } from 'firebase/utils/query/profile'

const useStyles = makeStyles(styles)

export default function Navbar(props) {
  const history = useHistory()
  const classes = useStyles()

  const [isSignin, setIsSignin] = React.useState(false)
  // current user variables and handlers
  const [currentUser, setCurrentUser] = React.useState({
    email: '',
    fullName: '',
    city: '',
  })
  const [currentUserAvatar, setCurrentUserAvatar] = React.useState('')

  React.useEffect(() => {
    getCurrentUserQuery()
      .then(user => {
        setIsSignin(true)
        getProfileQuery(user.uid)
          .then(profile => {
            profile.forEach(function (doc) {
              setCurrentUser(currentUser => ({
                ...currentUser,
                email: doc.data().email,
                fullName: doc.data().fullName,
                city: doc.data().city,
              }))
            })
            setCurrentUserAvatar(profile.avatar)
            setIsSignin(true)
          })
          .catch(error => {
            setIsSignin(false)
            console.log(error)
            history.push('/')
          })
      })
      .catch(error => {
        setIsSignin(false)
        console.log(error)
        history.push('/')
      })
  }, [isSignin, history])

  const { openMenu } = props
  const [messageCount] = React.useState(3)
  const [selectedNav, setSelectedNav] = React.useState(props.nav)

  const handleSetNav = id => {
    setSelectedNav(id)
    switch (id) {
      case 'home':
        history.push('/home')
        break
      case 'createProj':
        history.push('/create-project')
        break
      case 'messages':
        history.push('/messages')
        break
      case 'projects':
        history.push('/projects')
        break
      case 'profile':
        history.push('/profile')
        break
    }
  }

  return (
    <div className={openMenu ? classes.navbar : classes.closeNavBar}>
      <div className={classes.container}>
        <div className={classes.fullWidth}>
          <Badge
            classes={{ badge: classes.userBadge }}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            badgeContent={messageCount}
          >
            <img src={Avatar} alt="..." className={openMenu ? classes.avatar : classes.closeAvatar} />
            <img
              src={currentUserAvatar}
              alt="..."
              className={openMenu ? classes.userAvatar : classes.closeUserAvatar}
            />
          </Badge>
        </div>
        <div className={classes.fullWidth}>
          <Typography className={classes.userName}>{currentUser.fullName}</Typography>
        </div>
        <div className={classes.fullWidth}>
          {console.log(currentUser)}
          <Typography className={classes.cityName}>{currentUser.city}</Typography>
        </div>
        <div className={openMenu ? classes.navItem : classes.closeNavItem}>
          <ul className={classes.navUl}>
            <li className={selectedNav === 'home' ? (openMenu ? classes.active : classes.closeActive) : classes.navLi}>
              <div
                className={
                  selectedNav === 'home' ? (openMenu ? classes.leftDiv : classes.closeLeftDiv) : classes.emptyDiv
                }
              />
              <a
                className={selectedNav === 'home' ? classes.navASelectedTag : classes.navATag}
                onClick={() => handleSetNav('home')}
              >
                <img src={HomeGrayIcon} alt="..." className={classes.icon} />
                <Typography className={classes.navText}>{openMenu ? 'Home' : ''}</Typography>
              </a>
              <div className={selectedNav === 'home' ? classes.rightDiv : classes.emptyDiv} />
            </li>
            <li
              className={
                selectedNav === 'createProj' ? (openMenu ? classes.active : classes.closeActive) : classes.navLi
              }
            >
              <div
                className={
                  selectedNav === 'createProj' ? (openMenu ? classes.leftDiv : classes.closeLeftDiv) : classes.emptyDiv
                }
              />
              <a
                className={selectedNav === 'createProj' ? classes.navASelectedTag : classes.navATag}
                onClick={() => handleSetNav('createProj')}
              >
                <img
                  src={selectedNav === 'createProj' ? NewProjectGreenIcon : NewProjectGrayIcon}
                  alt="..."
                  className={classes.icon}
                />
                <Typography className={classes.navText}>{openMenu ? 'New Project' : ''}</Typography>
              </a>
              <div className={selectedNav === 'createProj' ? classes.rightDiv : classes.emptyDiv} />
            </li>
            <li
              className={selectedNav === 'messages' ? (openMenu ? classes.active : classes.closeActive) : classes.navLi}
            >
              <div
                className={
                  selectedNav === 'messages' ? (openMenu ? classes.leftDiv : classes.closeLeftDiv) : classes.emptyDiv
                }
              />
              <a
                className={selectedNav === 'messages' ? classes.navASelectedTag : classes.navATag}
                onClick={() => handleSetNav('messages')}
              >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Badge
                      classes={{ badge: classes.mailBadge }}
                      color="secondary"
                      variant="dot"
                      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                      <img
                        src={selectedNav === 'messages' ? MessageGreenIcon : MessageGrayIcon}
                        alt="..."
                        className={classes.icon}
                      />
                    </Badge>
                    <Typography className={classes.navText}>{openMenu ? 'Messages' : ''}</Typography>
                  </div>
                  <div>
                    {openMenu ? (
                      <Badge
                        classes={{ badge: classes.mailCountBadge }}
                        color="secondary"
                        badgeContent={messageCount}
                      ></Badge>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </a>
              <div className={selectedNav === 'messages' ? classes.rightDiv : classes.emptyDiv} />
            </li>
            <li
              className={selectedNav === 'projects' ? (openMenu ? classes.active : classes.closeActive) : classes.navLi}
            >
              <div
                className={
                  selectedNav === 'projects' ? (openMenu ? classes.leftDiv : classes.closeLeftDiv) : classes.emptyDiv
                }
              />
              <a
                className={selectedNav === 'projects' ? classes.navASelectedTag : classes.navATag}
                onClick={() => handleSetNav('projects')}
              >
                <img
                  src={selectedNav === 'projects' ? ProjectGreenIcon : ProjectGrayIcon}
                  alt="..."
                  className={classes.icon}
                />
                <Typography className={classes.navText}>{openMenu ? 'Projects' : ''}</Typography>
              </a>
              <div className={selectedNav === 'projects' ? classes.rightDiv : classes.emptyDiv} />
            </li>
            <li
              className={selectedNav === 'profile' ? (openMenu ? classes.active : classes.closeActive) : classes.navLi}
            >
              <div
                className={
                  selectedNav === 'profile' ? (openMenu ? classes.leftDiv : classes.closeLeftDiv) : classes.emptyDiv
                }
              />
              <a
                className={selectedNav === 'profile' ? classes.navASelectedTag : classes.navATag}
                onClick={() => handleSetNav('profile')}
              >
                <img
                  src={selectedNav === 'profile' ? ProfileGreenIcon : ProfileGrayIcon}
                  alt="..."
                  className={classes.icon}
                />
                <Typography className={classes.navText}>{openMenu ? 'Profile' : ''}</Typography>
              </a>
              <div className={selectedNav === 'profile' ? classes.rightDiv : classes.emptyDiv} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
