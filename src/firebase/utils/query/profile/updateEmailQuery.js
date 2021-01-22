import firebase from '../../../firebase'

const updateEmailQuery = emailInfo => {
  var newEmail = emailInfo.newEmail
  var currentPassword = emailInfo.currentPassword
  const reauthenticate = currentPassword => {
    var user = firebase.auth().currentUser
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword)
    return user.reauthenticateWithCredential(cred)
  }
  return new Promise((resolve, reject) => {
    reauthenticate(currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser
        let data = {}
        data.uid = user.uid
        data.email = newEmail
        // get user full name from users in cloud firestore collection
        firebase
          .firestore()
          .collection('users')
          .where('uid', '==', user.uid)
          .get()
          .then(user => {
            data.fullName = user.fullName
          })
          .catch(error => {
            reject(error)
          })
        data.identifier = newEmail
        // update user email in users collection of cloud firestore collection
        firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .update(data)
          .then(() => {
            // update user email in users object of firebase authentication
            user
              .updateEmail(newEmail)
              .then(() => {
                resolve('Email updated!')
              })
              .catch(error => {
                reject(error)
              })
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

export default updateEmailQuery
