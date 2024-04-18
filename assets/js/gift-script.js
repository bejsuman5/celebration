
// change the image depended by the user name
// Get the folder name from the URL query parameter, with a default value of 'default-folder'

const urlParams = new URLSearchParams(window.location.search);
const birthday_person = urlParams.get('birthday_person') || 'default';

// Set the image source based on the folder name
const imgElement1 = document.getElementById('image-1');
imgElement1.src = `assets/plugins/${birthday_person}/images/image-1.jpg`;

const imgElement2 = document.getElementById('image-2');
imgElement2.src = `assets/plugins/${birthday_person}/images/image-2.jpg`;

const imgElement3 = document.getElementById('image-3');
imgElement3.src = `assets/plugins/${birthday_person}/images/image-3.jpg`;

const imgElement4 = document.getElementById('image-4');
imgElement4.src = `assets/plugins/${birthday_person}/images/image-4.jpg`;

const imgElement5 = document.getElementById('image-5');
imgElement5.src = `assets/plugins/${birthday_person}/images/image-5.jpg`;

const imgElement6 = document.getElementById('image-6');
imgElement6.src = `assets/plugins/${birthday_person}/images/image-6.jpg`;

// const imgElement7 = document.getElementById('image-7');
// imgElement7.src = `assets/plugins/${birthday_person}/images/image-7.jpg`;

// const imgElement8 = document.getElementById('image-8');
// imgElement8.src = `assets/plugins/${birthday_person}/images/image-8.jpg`;