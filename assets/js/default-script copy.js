const urlLocation = new URLSearchParams(window.location.search);
const folderNameForScript = urlLocation.get('folder') || 'flowers';
const scriptElement = document.createElement('script');

scriptElement.src = `assets/plugins/${folderNameForScript}/js/text.js`;
document.head.appendChild(scriptElement);



// const urlLocation = new URLSearchParams(window.location.search);
// const folderNameForScript = urlLocation.get('folder') || 'suman';
// const scriptElement = document.createElement('script');;

// scriptElement.src = `assets/${folderNameForScript}/js/text-script.js`;
// document.head.appendChild(scriptElement);





// document.addEventListener('DOMContentLoaded', function() {
//     // Get the folder name from the URL query parameter, with a default value of 'default-folder'
//     const urlParams = new URLSearchParams(window.location.search);
//     const folderName = urlParams.get('folder') || 'default-folder';

//     // Set the image source based on the folder name
//     const imgElement = document.getElementById('demoImage');
//     imgElement.src = `${folderName}/images/demo.png`;

//     // Load the script.js file based on the folder name
//     const scriptElement = document.createElement('script');
//     scriptElement.src = `${folderName}/script.js`;
//     document.head.appendChild(scriptElement);
// });