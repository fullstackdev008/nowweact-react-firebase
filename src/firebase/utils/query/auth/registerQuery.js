import firebase from '../../../firebase'

const registerQuery = authInfo => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(authInfo.email, authInfo.password)
      .then(user => {
        let newUser = {}
        newUser.uid = user.user.uid
        newUser.email = user.user.email
        newUser.fullName = user.user.displayName
        newUser.identifier = user.user.email
        firebase
          .firestore()
          .collection('users')
          .doc(newUser.uid)
          .set(newUser)
          .then(() => {
            resolve({ message: 'Register success' })
          })
          .catch(error => {
            reject(error)
          })
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default registerQuery
