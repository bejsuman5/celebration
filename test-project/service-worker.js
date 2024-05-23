// self.addEventListener('push', function(event) {
//     let data = {};
//     if (event.data) {
//         data = event.data.json();
//     }

//     const options = {
//         body: data.body,
//         icon: data.icon,
//         badge: 'assets/images/badge.png', // optional
//     };

//     event.waitUntil(
//         self.registration.showNotification(data.title, options)
//     );
// });

// self.addEventListener('notificationclick', function(event) {
//     event.notification.close();
//     event.waitUntil(
//         clients.openWindow('/')
//     );
// });
