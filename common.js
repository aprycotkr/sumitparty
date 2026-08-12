firebase.initializeApp({
  apiKey: 'AIzaSyBkh-AIqWcLOdUU4uhy9dfbwwPJ_vSgb0',
  authDomain: 'sumit-admin.firebaseapp.com',
  databaseURL: 'https://sumit-admin-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'sumit-admin',
  appId: '1:226522660804:web:53212e3dbf6e88a498ae91'
});
window._fbBusanRef = firebase.database().ref('/busan/dateStatus');
