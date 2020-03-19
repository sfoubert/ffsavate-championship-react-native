import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import * as firebase from 'firebase'
import '@firebase/firestore'

export default async function registerForPushNotificationsAsync() {

  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  // only asks if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  // On Android, permissions are granted on app installation, so
  // `askAsync` will never prompt the user

  // Stop here if the user did not grant permissions
  if (status !== 'granted') {
    alert('No notification permissions!')
    return
  }

  // Get the token that identifies this device
  let token = await Notifications.getExpoPushTokenAsync()

  const firestore = firebase.firestore();

  firestore.collection("tokens").doc(token).set({
    token: token,
    creationDate: new Date()
  })

}