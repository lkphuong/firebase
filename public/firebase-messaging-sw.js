importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js',
);

var firebaseConfig = {
  apiKey: 'AIzaSyCObYCpPSWFwEwcZakKUn2jKu7xWku__6c',
  authDomain: 'testfirebase-731e2.firebaseapp.com',
  databaseURL: 'https://testfirebase-731e2-default-rtdb.firebaseio.com',
  projectId: 'testfirebase-731e2',
  storageBucket: 'testfirebase-731e2.appspot.com',
  messagingSenderId: '912910585489',
  appId: '1:912910585489:web:bdddad9bc8cca68cf37930',
  measurementId: 'G-ZEGD5F7VX7',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(payload);
  const notification = JSON.parse(payload);
  const notificationOption = {
    body: notification.body,
    icon: notification.icon,
  };
  return self.registration.showNotification(
    payload.notification.title,
    notificationOption,
  );
});
