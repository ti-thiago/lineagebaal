importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '902594411134',
});

const messaging = firebase.messaging();

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action);
  }
  event.notification.close();
});
