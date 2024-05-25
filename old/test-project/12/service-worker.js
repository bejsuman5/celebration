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


// --------------------------------------------------

self.addEventListener('push', function(event) {
    let data = event.data.json();
    const options = {
        body: data.body,
        icon: data.icon,
        badge: data.badge // adding the badge property
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(function(clientList) {
            if (clientList.length > 0) {
                return clientList[0].focus();
            }
            return clients.openWindow('/');
        })
    );
});
