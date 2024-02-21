// gift box
const click2 = document.querySelector('.click2');
const click = document.querySelector('.click');
const gifBox = document.querySelector('.gift-box');
const shadow = document.querySelector('.shadow');
const giftContainer = document.querySelector('.gift-container');
const GiftText = document.querySelector('.text');
const typingAnimation = document.querySelector('.typing-animation');


click.addEventListener('click', () => {
    if (click.className === "click") {
        click2.classList.add('active')
        click.classList.add('active')
        click.classList.add('hide')
        gifBox.classList.add('active')
        shadow.classList.add('active')
        giftContainer.classList.add('active')
        GiftText.classList.add('active')
        GiftText.classList.remove('active2')
        // typingAnimation.classList.add('animate')
    }
    else {
        click2.classList.remove('active')
        click.classList.remove('active')
        click.classList.remove('hide')
        gifBox.classList.remove('active')
        shadow.classList.remove('active')
        giftContainer.classList.remove('active')
        GiftText.classList.remove('active')
        GiftText.classList.add('active2')
        typingAnimation.classList.remove('animate')
    }
});


//  start
// ********************************************
// ********************************************

// window.alert(bejsuman);
// document.getElementById("giftBoxHeading").innerHTML = giftBoxHeading;
// const text = giftBoxWish;


//  end
// ********************************************
// ********************************************




// countdown start
// ********************************************
// ********************************************

let count = 5;
let intervalId;
const countdownElement = document.getElementById('countdown');

function countdown() {
    intervalId = setInterval(() => {
        countdownElement.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(intervalId);
            // countdownElement.textContent = 'Just for you...!';
            countdownElement.textContent = '0';
            count = 5; // Reset the count for future use
            setTimeout(() => {
            content.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
        }
    }, 1000); // Update every second (1000 ms)
}
function reset() {
    clearInterval(intervalId);
    count = 5;
    countdownElement.textContent = "...";
}
// countdown end
// ********************************************
// ********************************************





// typeWriter start
// ********************************************
// ********************************************



// const textElement = document.getElementById('typingAnimationContainer');
// const text = 'This Gift is Just For You, My Dear Friend...!';
// let index = 0;

// function typeWriter() {
//     if (index < text.length) {
//         textElement.textContent += text.charAt(index);
//         index++;
//         setTimeout(typeWriter, 100); // Adjust the typing speed here (milliseconds)
//     }
// }

// // Start the typing effect
// typeWriter();



const textElement = document.getElementById('typingAnimationContainer');
const startButton = document.getElementById('showContentBtn');
// const text = 'This Gift is Just For You, My Dear Friend...!';
// const text = 'অভিমানের মেঘ উড়িয়ে দাও  অনেক দূরে,মন খারাপের দিনটা তোমার না আসুক ফিরে,দুঃখ গুলো দাউ উড়িয়ে ওই আকাশের নীচে,অসীম সুখ বয়ে আসুক তোমার জীবন ভোরে,শুভ জন্মদিন প্রিয় ।।';
// const text = "অভিমানের মেঘ উড়িয়ে দাও অনেক দূরে,\nমন খারাপের দিনটা তোমার না আসুক ফিরে,\nদুঃখ গুলো দাউ উড়িয়ে ওই আকাশের নীচে,\nঅসীম সুখ বয়ে আসুক তোমার জীবন ভোরে,\nশুভ জন্মদিন প্রিয় ।।";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust the typing speed here (milliseconds)
    }else{
        // setTimeout(countdown, 18000);
        setTimeout(countdown);
    }
}

// startButton.addEventListener('click', () => {
//     // Start the typing effect after 5 seconds
//     setTimeout(typeWriter, 5000);
// });
// typeWriter end
// ********************************************
// ********************************************




//  start
// ********************************************
// ********************************************
const showContentBtn = document.getElementById('showContentBtn');
const content = document.getElementById('content');

showContentBtn.addEventListener('click', () => {
    content.classList.toggle('hidden');
    if (!content.classList.contains('hidden')) {
        // setTimeout(countdown, 18000);
        // setTimeout(() => {
        //     content.style.transform = 'translate(-50%, -50%) scale(1)';
        // }, 100);
        // setTimeout(function () {
        //     document.getElementById("typingAnimationContainer").classList.add("animate");
        // }, 2000);
        // typeWriter();
        setTimeout(typeWriter, 2000);
    } else {
        reset()
        content.style.transform = 'translate(-50%, -50%) scale(0)';
    }
});

// const showContentBtn = document.getElementById('showContentBtn');
// const content = document.getElementById('content');

// showContentBtn.addEventListener('click', () => {
//     content.style.display = 'block';
//     setTimeout(() => {
//         content.style.transform = 'scale(1)';
//         content.style.borderRadius = '0';
//     }, 100);
// });
//  end
// ********************************************
// ********************************************




// countdown start
// ********************************************
// ********************************************

// let count = 10;
// const countdownElement = document.getElementById('countdown');

// function countdown() {
//     countdownElement.textContent = count;
//     count--;

//     if (count >= 0) {
//         setTimeout(countdown, 1000); // Call the countdown function after 1 second (1000 ms)
//     } else {
//         countdownElement.textContent = 'Just for you...!';
//         // count = 10; // Reset the count for future use
//     }
// }
// // Start the countdown
// // countdown();

// document.getElementById('showContentBtn').addEventListener('click', function () {
//     // Code to run when the button is clicked
//     // Start the countdown after 3 seconds
//     setTimeout(countdown, 4000); // Start after 3 seconds (5000 ms)
// });
// countdown end
// ********************************************
// ********************************************





// animation gift text start
// ********************************************
// ********************************************
// document.getElementById("showContentBtn").addEventListener("click", function () {
//     setTimeout(function () {
//         document.getElementById("typingAnimationContainer").classList.add("animate");
//     }, 3000); // 2000 milliseconds = 2 seconds
// });
// animation gift text end
// ********************************************
// ********************************************







// animation heart start
// ********************************************
// ********************************************

document.querySelector('.heart').addEventListener('click', function () {
    createHearts();
});

function createHearts() {
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('heart-container');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('small-heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
        heartContainer.appendChild(heart);
    }
    document.body.appendChild(heartContainer);
    setTimeout(() => {
        heartContainer.remove();
    }, 5000);
}
// animation heart end
// ********************************************
// ********************************************

// animation heart start
// ********************************************
// ********************************************

document.querySelector('.heart2').addEventListener('click', function () {
    createHearts2();
});

function createHearts2() {
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('heart-container');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('small-heart2');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
        heartContainer.appendChild(heart);
    }
    document.body.appendChild(heartContainer);
    setTimeout(() => {
        heartContainer.remove();
    }, 5000);
}
// animation heart end
// ********************************************
// ********************************************


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
// animation gift text end
// ********************************************
// ********************************************


// Get the folder name from the URL query parameter, with a default value of 'default-folder'
const urlParams = new URLSearchParams(window.location.search);
const folderName = urlParams.get('folder') || 'flowers';

// Set the image source based on the folder name
const imgElement1 = document.getElementById('image-1');
imgElement1.src = `assets/plugins/${folderName}/images/1.jpg`;

const imgElement2 = document.getElementById('image-2');
imgElement2.src = `assets/plugins/${folderName}/images/2.jpg`;

const imgElement3 = document.getElementById('image-3');
imgElement3.src = `assets/plugins/${folderName}/images/3.jpg`;

const imgElement4 = document.getElementById('image-4');
imgElement4.src = `assets/plugins/${folderName}/images/4.jpg`;

const imgElement5 = document.getElementById('image-5');
imgElement5.src = `assets/plugins/${folderName}/images/5.jpg`;

const imgElement6 = document.getElementById('image-6');
imgElement6.src = `assets/plugins/${folderName}/images/6.jpg`;

const imgElement7 = document.getElementById('image-7');
imgElement7.src = `assets/plugins/${folderName}/images/7.jpg`;

const imgElement8 = document.getElementById('image-8');
imgElement8.src = `assets/plugins/${folderName}/images/8.jpg`;

// animation gift text end
// ********************************************
// ********************************************

// animation gift text end
// ********************************************
// ********************************************

// animation gift text end
// ********************************************
// ********************************************

// animation gift text end
// ********************************************
// ********************************************
