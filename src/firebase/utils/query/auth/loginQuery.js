import firebase from '../../../firebase'

const loginQuery = authInfo => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(authInfo.email, authInfo.password)
      .then(() => {
        resolve({ message: 'Login success' })
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default loginQuery
