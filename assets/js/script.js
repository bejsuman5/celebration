const giftBoxHeadingClass = document.querySelector('.gift-box-heading');
const giftBoxCapClass = document.querySelector('.gift-box-cap');
const giftBoxContainer = document.querySelector('.gift-box-container');
const gifBoxBody = document.querySelector('.gift-box-body');
const giftBoxShadow = document.querySelector('.gift-box-shadow');
const giftBoxTextBody = document.querySelector('.gift-box-text-body');
const giftBoxTextTypingAnimation = document.getElementById('giftBoxTextTypingAnimation');
const giftBoxCapId = document.getElementById('giftBoxCap');
const giftBtn = document.querySelector('.gift-btn');

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
        giftBtn.classList.add('active');

        typingTimeout = setTimeout(typeWriter, 2000);
    }
    else {
        giftBoxHeadingClass.classList.remove('active');
        giftBoxCapClass.classList.remove('active');
        giftBoxContainer.classList.remove('active');
        gifBoxBody.classList.remove('active');
        giftBoxShadow.classList.remove('active');
        giftBoxTextBody.classList.remove('active');
        giftBoxTextBody.classList.add('active2');

        resetText();
    }
});

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
        giftBtn.classList.remove('active');
    }
}
function resetText() {
    clearTimeout(typingTimeout);
    giftBoxTextTypingAnimation.textContent = '';
    index = 0;
}

const urlParams = new URLSearchParams(window.location.search);
const happy_birthday = urlParams.get('happy_birthday') || 'default';

const baseURL = 'gift.html';
let responsiveURL = baseURL +'?happy_birthday='+ happy_birthday;
document.getElementById('giftBtnId').setAttribute('href', responsiveURL);