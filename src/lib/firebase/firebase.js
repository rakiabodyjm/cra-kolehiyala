import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCzHYBYAQxaZrGyCFMZOHl0ph1Md-eSlgw',
  authDomain: 'comas-1.firebaseapp.com',
  databaseURL: 'https://comas-1.firebaseio.com',
  projectId: 'comas-1',
  storageBucket: 'comas-1.appspot.com',
  messagingSenderId: '625885047853',
  appId: '1:625885047853:web:7ca7022f039df2cd169ca4',
}

firebase.initializeApp(firebaseConfig)

firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
})

firebase
  .firestore()asdd
  .enablePersistence()
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log('multiple tabs open')
    } else if (err.code === 'unimplemented') {
      console.log('current browser does not support feature')
    }
  })

export default firebase.firestore()
