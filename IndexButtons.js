// Avery Willets
// 12/7/23
// This file contains the buttons for the Index.html page

// This function actually moves the meme image around
function moveMeme() {
    // This declares the variable memeImage and binds it to the memeImage
    var memeImage = document.getElementById("memeImage");

    // These variables hold random positions for the Memeimage to go to
    // This variable holds a random location on the y-axis
    var randomTop = Math.floor(Math.random() * (window.innerHeight - memeImage.clientHeight));
    // This variable holds a random location on the y-axis
    var randomLeft = Math.floor(Math.random() * (window.innerWidth - memeImage.clientWidth));

    // These apply the new random positions to memeImage
    memeImage.style.top = randomTop + "px";
    memeImage.style.left = randomLeft + "px";
}

// This function starts moving memeImage and disables the start button
function startMoving() {
    // These variables hold the values for the start and stop buttons and bind them to the actual start and stop buttons
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");

    // This disables the start button
    startButton.disabled = true;
    // This stops disabling the stop button
    stopButton.disabled = false;

    // This moves the meme image at intervals of 0.5 seconds
    moveInterval = setInterval(moveMeme, 500);
}

// This function stops moving the memeImage and disables the stop button
function stopMoving() {
    // These variables hold the values for the start and stop buttons and bind them to the actual start and stop buttons
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");

    // This stops disabling the start button
    startButton.disabled = false;
    // This disables the stop button
    stopButton.disabled = true;

    // This stops moving the meme image
    clearInterval(moveInterval);
}