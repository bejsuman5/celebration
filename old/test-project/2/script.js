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

// Function to request notification permission and show notification
function showNotification() {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification('Hello!', {
                    body: 'This is your notification.',
                    icon: 'icon.png',
                    vibrate: [200, 100, 200],
                    tag: 'notification-sample'
                });
            });
        }
    });
}

// Show notification after 5 seconds of page load
window.addEventListener('load', function() {
    setTimeout(showNotification, 5000);
});
