const urlLocation = new URLSearchParams(window.location.search);
const birthdayPersonNameForScript = urlLocation.get('birthday_person') || 'flowers';
const scriptElement = document.createElement('script');

scriptElement.src = `assets/plugins/${birthdayPersonNameForScript}/js/text.js`;

scriptElement.onerror = function() {
    // scriptElement.src = 'assets/js/default-text.js'; // Set another source location
    window.location.href = 'index.html';
};
// scriptElement.addEventListener('error', () => {
//     scriptElement.src = 'fallback-location.js'; // Set another source location
// });

// const scriptLoadSuccess = () => {
//     // Function to run if the script was loaded successfully
//     console.log('Script loaded successfully!');
// };

// const scriptLoadError = () => {
//     // Function to run if the script failed to load
//     console.log('Script failed to load!');
//     window.location.href = 'index.html';
// };

// // Add an event listener for the script's onload event
// scriptElement.onload = scriptLoadSuccess;

// // Add an event listener for the script's onerror event
// scriptElement.onerror = scriptLoadError;

document.head.appendChild(scriptElement);
