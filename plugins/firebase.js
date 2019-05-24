import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  // apiKey: process.env.apiKey || '',
  // authDomain: process.env.authDomain || '',
  databaseURL: process.env.databaseURL || '',
  projectId: process.env.projectId || 'xiao-proto'
  // storageBucket: process.env.storageBucket || '',
  // messagingSenderId: process.env.messagingSenderId || '',
  // appId: process.env.appId || ''
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()

export { db }
