// Function to show notifications
function showNotifications() {
    const notifications = [
        { header: 'Header 1', title: 'Title 1', body: 'Body 1', footer: 'Footer 1', icon: 'icon1.png' },
        { header: 'Header 2', title: 'Title 2', body: 'Body 2', footer: 'Footer 2', icon: 'icon2.png' },
        { header: 'Header 3', title: 'Title 3', body: 'Body 3', footer: 'Footer 3', icon: 'icon3.png' },
        { header: 'Header 4', title: 'Title 4', body: 'Body 4', footer: 'Footer 4', icon: 'icon4.png' },
        { header: 'Header 5', title: 'Title 5', body: 'Body 5', footer: 'Footer 5', icon: 'icon5.png' },
        { header: 'Header 6', title: 'Title 6', body: 'Body 6', footer: 'Footer 6', icon: 'icon6.png' },
        { header: 'Header 7', title: 'Title 7', body: 'Body 7', footer: 'Footer 7', icon: 'icon7.png' },
        { header: 'Header 8', title: 'Title 8', body: 'Body 8', footer: 'Footer 8', icon: 'icon8.png' },
        { header: 'Header 9', title: 'Title 9', body: 'Body 9', footer: 'Footer 9', icon: 'icon9.png' },
        { header: 'Header 10', title: 'Title 10', body: 'Body 10', footer: 'Footer 10', icon: 'icon10.png' },
    ];

    let delay = 0;
    notifications.forEach((notification, index) => {
        setTimeout(() => {
            const options = {
                body: `${notification.body}\n${notification.footer}`,
                icon: notification.icon
            };
            new Notification(notification.title, options);
        }, delay);
        delay += 5000; // 5 seconds gap between each notification
    });
}

// Request permission to show notifications
document.addEventListener('DOMContentLoaded', () => {
    if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                setTimeout(showNotifications, 2000); // Show notifications after 2 seconds
            }
        });
    } else if (Notification.permission === 'granted') {
        setTimeout(showNotifications, 2000); // Show notifications after 2 seconds
    }
});
