import firebase from '../../../firebase'

const getCurrentUserQuery = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user != null) {
        resolve(user)
      } else {
        reject({ message: 'Firebase Error: Getting current user failure' })
      }
    })
  })
}

export default getCurrentUserQuery
