import firebase from '../../../firebase'

const updatePasswordQuery = (currentPassword, newPassword) => {
  const reauthenticate = currentPassword => {
    var user = firebase.auth().currentUser
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword)
    return user.reauthenticateWithCredential(cred)
  }

  return new Promise((resolve, reject) => {
    reauthenticate(currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser
        user
          .updatePassword(newPassword)
          .then(() => {
            resolve('Password updated!')
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}

export default updatePasswordQuery
