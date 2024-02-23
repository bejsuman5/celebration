const giftBoxHeadingClass = document.querySelector('.gift-box-heading');
const giftBoxCapClass = document.querySelector('.gift-box-cap');
const giftBoxContainer = document.querySelector('.gift-box-container');
const gifBoxBody = document.querySelector('.gift-box-body');
const giftBoxShadow = document.querySelector('.gift-box-shadow');
const giftBoxTextBody = document.querySelector('.gift-box-text-body');
// const click2 = document.querySelector('.click2');
// const typingAnimation = document.querySelector('.typing-animation');
const giftBoxContent = document.getElementById('giftBoxContent');
const giftBoxTextTypingAnimation = document.getElementById('giftBoxTextTypingAnimation');
const giftBoxCapId = document.getElementById('giftBoxCap');
// const giftBoxText = "অভিমানের মেঘ উড়িয়ে দাও অনেক দূরে,\nমন খারাপের দিনটা তোমার না আসুক ফিরে,\nদুঃখ গুলো দাউ উড়িয়ে ওই আকাশের নীচে,\nঅসীম সুখ বয়ে আসুক তোমার জীবন ভোরে,\nশুভ জন্মদিন প্রিয় ।।";
const giftBoxCountdown = document.getElementById('giftBoxCountdown');





// countdown function
// *************************************************************************************
// *************************************************************************************
let count = 5;
let intervalId;

function countdown() {
    intervalId = setInterval(() => {
        giftBoxCountdown.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(intervalId);
            // giftBoxCountdown.textContent = 'Just for you...!';
            giftBoxCountdown.textContent = '0';
            count = 5; // Reset the count for future use
            setTimeout(() => {
                giftBoxContent.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 100);
        }
    }, 1000); // Update every second (1000 ms)
}
function resetCountdown() {
    clearInterval(intervalId);
    count = 5;
    giftBoxCountdown.textContent = "";
}






// typewriter function
// *************************************************************************************
// *************************************************************************************
let index = 0;
let typingTimeout;

function typeWriter() {
    if (index < giftBoxText.length) {
        giftBoxTextTypingAnimation.textContent += giftBoxText.charAt(index);
        index++;
        typingTimeout = setTimeout(typeWriter, 120); // Adjust the typing speed here (milliseconds)
    } else {
        // setTimeout(countdown, 18000);
        // setTimeout(countdown);
        countdown();
    }
}
function resetText() {
    clearTimeout(typingTimeout);
    giftBoxTextTypingAnimation.textContent = '';
    index = 0;
}




// gift-box click function
// *************************************************************************************
// *************************************************************************************
giftBoxCapClass.addEventListener('click', () => {
    if (giftBoxCapClass.className === "gift-box-cap") {
        giftBoxHeadingClass.classList.add('active');
        giftBoxCapClass.classList.add('active');
        giftBoxContainer.classList.add('active');
        gifBoxBody.classList.add('active');
        giftBoxShadow.classList.add('active');
        giftBoxTextBody.classList.add('active');
        giftBoxTextBody.classList.remove('active2');
        // click2.classList.add('active');
        // click.classList.add('hide');
        // typingAnimation.classList.add('animate');
    }
    else {
        giftBoxHeadingClass.classList.remove('active');
        giftBoxCapClass.classList.remove('active');
        giftBoxContainer.classList.remove('active');
        gifBoxBody.classList.remove('active');
        giftBoxShadow.classList.remove('active');
        giftBoxTextBody.classList.remove('active');
        giftBoxTextBody.classList.add('active2');
        // click2.classList.remove('active');
        // click.classList.remove('hide');
        // typingAnimation.classList.remove('animate');
    }




    giftBoxContent.classList.toggle('gift-box-hidden-content');
    if (!giftBoxContent.classList.contains('gift-box-hidden-content')) {
        typingTimeout = setTimeout(typeWriter, 2000);
    } else {
        resetText();
        resetCountdown();
        giftBoxContent.style.transform = 'translate(-50%, -50%) scale(0)';
    }
});





// gift-box 
// *************************************************************************************
// *************************************************************************************
// const giftBoxTextTypingAnimation="hello";
// const giftBoxHeading = "Open The Surprise Box !";

// document.getElementById("giftBoxTextTypingAnimation").innerHTML = giftBoxTextTypingAnimation;
// document.getElementById("giftBoxHeading").innerHTML = giftBoxHeading;





// animation RED heart start
// *************************************************************************************
// *************************************************************************************
document.querySelector('.heart-top-left').addEventListener('click', function () {
    createHearts();
});

function createHearts() {
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('heart-container');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('small-red-heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
        heartContainer.appendChild(heart);
    }
    document.body.appendChild(heartContainer);
    setTimeout(() => {
        heartContainer.remove();
    }, 5000);
}






// animation yellow heart start
// *************************************************************************************
// *************************************************************************************
document.querySelector('.heart-bottom-right').addEventListener('click', function () {
    createHearts2();
});

function createHearts2() {
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('heart-container');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('small-yellow-heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
        heartContainer.appendChild(heart);
    }
    document.body.appendChild(heartContainer);
    setTimeout(() => {
        heartContainer.remove();
    }, 5000);
}






// shooting-stars start
// *************************************************************************************
// *************************************************************************************
const NUM_STARS = 50;
const container = document.querySelector('.stars');

for (let i = 0; i < NUM_STARS; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random duration between 1s and 4s
    container.appendChild(star);
}






// change the image depended by the user name
// *************************************************************************************
// *************************************************************************************

// Get the folder name from the URL query parameter, with a default value of 'default-folder'
const urlParams = new URLSearchParams(window.location.search);
const birthday_person = urlParams.get('birthday_person') || 'flowers';

// Set the image source based on the folder name
const imgElement1 = document.getElementById('image-1');
imgElement1.src = `assets/plugins/${birthday_person}/images/1.jpg`;

const imgElement2 = document.getElementById('image-2');
imgElement2.src = `assets/plugins/${birthday_person}/images/2.jpg`;

const imgElement3 = document.getElementById('image-3');
imgElement3.src = `assets/plugins/${birthday_person}/images/3.jpg`;

const imgElement4 = document.getElementById('image-4');
imgElement4.src = `assets/plugins/${birthday_person}/images/4.jpg`;

const imgElement5 = document.getElementById('image-5');
imgElement5.src = `assets/plugins/${birthday_person}/images/5.jpg`;

const imgElement6 = document.getElementById('image-6');
imgElement6.src = `assets/plugins/${birthday_person}/images/6.jpg`;

const imgElement7 = document.getElementById('image-7');
imgElement7.src = `assets/plugins/${birthday_person}/images/7.jpg`;

const imgElement8 = document.getElementById('image-8');
imgElement8.src = `assets/plugins/${birthday_person}/images/8.jpg`;





// gift-box 
// *************************************************************************************
// *************************************************************************************


