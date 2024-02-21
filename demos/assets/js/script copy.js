// gift box
const click = document.querySelector('.click');
const gifBox = document.querySelector('.gift-box');
const shadow = document.querySelector('.shadow');
const giftContainer = document.querySelector('.gift-container');
const text = document.querySelector('.text');
const typingAnimation = document.querySelector('.typing-animation');


click.addEventListener('click', () => {
    if (click.className === "click") {
        click.classList.add('active')
        gifBox.classList.add('active')
        shadow.classList.add('active')
        giftContainer.classList.add('active')
        text.classList.add('active')
        text.classList.remove('active2')
        // typingAnimation.classList.add('animate')
    }
    else {
        click.classList.remove('active')
        gifBox.classList.remove('active')
        shadow.classList.remove('active')
        giftContainer.classList.remove('active')
        text.classList.remove('active')
        text.classList.add('active2')
        typingAnimation.classList.remove('animate')
    }
});


// countdown start
// ********************************************
// ********************************************

let count = 10;
let intervalId;
const countdownElement = document.getElementById('countdown');

function countdown() {
    intervalId = setInterval(() => {
        countdownElement.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(intervalId);
            // countdownElement.textContent = 'Just for you...!';
            countdownElement.textContent = 'This Gift is Just For You, My Dear Friend...!';
            count = 10; // Reset the count for future use
        }
    }, 1000); // Update every second (1000 ms)
}
function reset() {
    clearInterval(intervalId);
    count = 10;
    countdownElement.textContent = "...";
}
// countdown end
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
        setTimeout(countdown, 3000);
        setTimeout(() => {
            content.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
        setTimeout(function () {
            document.getElementById("typingAnimationContainer").classList.add("animate");
        }, 3000); // 2000 milliseconds = 2 seconds
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







// animation gift text end
// ********************************************
// ********************************************
