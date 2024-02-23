const urlLocation = new URLSearchParams(window.location.search);
const birthdayPersonNameForScript = urlLocation.get('birthday_person') || 'flowers';
const scriptElement = document.createElement('script');

scriptElement.src = `assets/plugins/${birthdayPersonNameForScript}/js/text.js`;
document.head.appendChild(scriptElement);
