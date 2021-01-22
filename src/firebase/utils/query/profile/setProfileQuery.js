import firebase from '../../../firebase'
import 'firebase/storage'

const setProfileQuery = user => {
  return new Promise((resolve, reject) => {
    if (user.avatar.split('/')[0] === 'data:image') {
      firebase
        .storage()
        .ref()
        .child('profile/' + user.uid + '.png')
        .putString(user.avatar, 'data_url', { contentType: 'image/png' })
        .then(() => {
          user.avatar = 'profile/' + user.uid + '.png'
          firebase
            .firestore()
            .collection('users')
            .doc(user.uid)
            .update(user)
            .then(() => {
              resolve('Update profile success.')
            })
            .catch(error => {
              reject(error)
            })
        })
        .catch(error => {
          reject(error)
        })
    } else if (user.avatar.split('/')[0] === 'profile') {
      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .update(user)
        .then(() => {
          resolve('Update profile success.')
        })
        .catch(error => {
          reject(error)
        })
    }
  })
}

export default setProfileQuery
