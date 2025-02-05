"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

//debug
console.log("yesButton:", yesButton);
console.log("noButton:", noButton);
console.log("catImg:", catImg);

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function() {
    console.log("No button clicked");
    if (play) {
        noCount++;
        console.log("noCount is now", noCount);
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount === MAX_IMAGES) {
            play = false;
            console.log("reached max noCount, disabling further changes.");
        }
    }
});

function handleYesClick() {
    console.log("Yes button clicked");
    titleElement.innerHTML = "우편함 체크해봥ㅎㅎ";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "안돼.",
        "진짜로 확실해?",
        "진짜진짜진짜로?????????",
        "힝ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ",
        "아아ㅏ아ㅏㅏ아ㅏ아ㅏㅏㅇㅇ아ㅏㅏ아아아ㅏ아ㅏ",
        "다시한번 자아알 생각해봥",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(image) {
    catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}

/*falling red particles*/
function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    //random position
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    //remove the heart after animation complete (5 sec)
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

//create new falling heart every 300 ms
setInterval(createFallingHeart, 300);
