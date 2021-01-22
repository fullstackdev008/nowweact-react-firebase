import firebase from '../../../firebase'

const logoutQuery = () => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        resolve({ message: 'Sign out successfully.' })
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default logoutQuery
