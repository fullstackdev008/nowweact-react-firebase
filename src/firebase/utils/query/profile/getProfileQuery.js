import firebase from '../../../firebase'
import 'firebase/storage'

const getProfileQuery = uid => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('users')
      .where('uid', '==', uid)
      .get()
      .then(user => {
        let temp = undefined
        user.forEach(function (doc) {
          temp = doc.data().avatar
        })
        if (temp !== undefined) {
          firebase
            .storage()
            .ref()
            .child(temp)
            .getDownloadURL()
            .then(avatar => {
              user.avatar = avatar
              resolve(user)
            })
            .catch(error => {
              reject(error)
            })
        } else {
          user.avatar = 'undefined'
          resolve(user)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default getProfileQuery
