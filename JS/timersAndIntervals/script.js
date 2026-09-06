// This script simulates a download process with a progress bar.
// It updates the UI to reflect the download progress.

const progressFill = document.getElementById("progressFill");
const statusText = document.getElementById("statusText");
const percentText = document.getElementById("percentText");
const downloadBtn = document.getElementById("downloadBtn");
let progress = 0;
let downloadIntervalId = null;

function resetUI() {
    progress = 0;
    progressFill.style.width = "0%";
    percentText.textContent = "0%";
}

function startDownloadSimulation() {
    if (downloadIntervalId) return;

    downloadBtn.disabled = true;
    statusText.textContent = "Downloading...";

    downloadIntervalId = setInterval(() => {
        const chunk = Math.floor(Math.random() * 12) + 5;
    progress = Math.min(progress + chunk, 100);

    progressFill.style.width = `${progress}%`;
    percentText.textContent = `${progress}%`;
        if (progress >= 100) {
            clearInterval(downloadIntervalId);
            downloadIntervalId = null;
            statusText.textContent = "Download complete";
            downloadBtn.textContent = "Download Again";
            downloadBtn.disabled = false;
            // Short delay so completion state is visible before reset.
            setTimeout(() => {
                resetUI();
            }, 1200);
        }
    }, 500);
}
downloadBtn.addEventListener("click", startDownloadSimulation);



// setTimeout() is a JavaScript function that allows you to execute a piece of code or a function after a specified delay in milliseconds. 
// It takes two arguments: the first is the function to be executed, and the second is the delay time in milliseconds.


function greet() {
    console.log("Hello, world!");
}

// Set a timeout to call the greet function after 2000 milliseconds (2 seconds)
setTimeout(greet, 2000);    
// setInterval() is another JavaScript function that allows you to execute a piece of code or a function repeatedly at specified intervals in milliseconds. 
// It also takes two arguments: the first is the function to be executed, and the second is the interval time in milliseconds.


function sayHello() {
    console.log("Hello again!");
}

// Set an interval to call the sayHello function every 1000 milliseconds (1 second)
setInterval(sayHello, 1000);
// In summary, setTimeout() is used for executing code after a delay, while setInterval() is used for executing code repeatedly at specified intervals.        

// cleartimeout() and clearInterval() are functions used to cancel the execution of code that was scheduled with setTimeout() and setInterval(), respectively.

// Function to be executed after the delay
function greet() {
    console.log("Hello, world!");
}

// Set a timeout to call the greet function after 2000 milliseconds (2 seconds)
const timeoutId = setTimeout(greet, 2000);

// Cancel the timeout before it executes
clearTimeout(timeoutId);

// Function to be executed at intervals
function sayHello() {
    console.log("Hello again!");
}

// Set an interval to call the sayHello function every 1000 milliseconds (1 second)
const intervalId = setInterval(sayHello, 1000);

// Cancel the interval after 5000 milliseconds (5 seconds)
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared.");
}, 5000);   

