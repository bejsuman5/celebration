self.addEventListener('push', function(event) {
    let data = event.data.json();
    const options = {
        body: data.body,
        icon: data.icon,
        badge: data.badge
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url) // Modify the URL to the desired location
        // clients.openWindow('/') // Modify the URL to the desired location
    );
});