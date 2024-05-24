// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}

// Notification content
const notifications = [
    { header: 'Header 1', title: 'Title 1', body: 'Body 1', footer: 'Footer 1', icon: 'images/logos/suman.jpg' },
    { header: 'Header 2', title: 'Title 2', body: 'Body 2', footer: 'Footer 2', icon: 'images/logos/suman.jpg' },
    { header: 'Header 3', title: 'Title 3', body: 'Body 3', footer: 'Footer 3', icon: 'images/logos/suman.jpg' },
    { header: 'Header 4', title: 'Title 4', body: 'Body 4', footer: 'Footer 4', icon: 'images/logos/suman.jpg' },
    { header: 'Header 5', title: 'Title 5', body: 'Body 5', footer: 'Footer 5', icon: 'images/logos/suman.jpg' },
    { header: 'Header 6', title: 'Title 6', body: 'Body 6', footer: 'Footer 6', icon: 'images/logos/suman.jpg' },
    { header: 'Header 7', title: 'Title 7', body: 'Body 7', footer: 'Footer 7', icon: 'images/logos/suman.jpg' },
    { header: 'Header 8', title: 'Title 8', body: 'Body 8', footer: 'Footer 8', icon: 'images/logos/suman.jpg' },
    { header: 'Header 9', title: 'Title 9', body: 'Body 9', footer: 'Footer 9', icon: 'images/logos/suman.jpg' },
    { header: 'Header 10', title: 'Title 10', body: 'Body 10', footer: 'Footer 10', icon: 'images/logos/suman.jpg' },
];

// Function to request notification permission and show notification
function showNotification(notification) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification(notification.header, {
                    body: `${notification.title}\n\n${notification.body}\n\n${notification.footer}`,
                    icon: notification.icon,
                    vibrate: [200, 100, 200],
                    tag: 'notification-sample'
                });
            });
        }
    });
}

// Show notifications with a 5-second gap
window.addEventListener('load', function() {
    notifications.forEach((notification, index) => {
        setTimeout(() => showNotification(notification), index * 6000);
    });
});
