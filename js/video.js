// var video; //video element

// window.addEventListener("load", function () {
//     console.log("Page loaded");

//     // Initialize the video element
//     video = document.querySelector("#player1");
//     video.autoplay = false;
//     video.loop = false;

//     // Update volume display on load
//     updateVolumeInfo();
// });

// // Play the video and update volume info
// document.querySelector("#play").addEventListener("click", function () {
//     console.log("Play Video");
//     video.play();
//     updateVolumeInfo();
// });

// // Pause the video
// document.querySelector("#pause").addEventListener("click", function () {
//     console.log("Pause Video");
//     video.pause();
// });

// // Slow down the video speed
// document.querySelector("#slower").addEventListener("click", function () {
//     video.playbackRate *= 0.9; // Decrease speed by 10%
//     console.log(`New speed: ${video.playbackRate.toFixed(5)}`);
// });

// // Speed up the video speed
// document.querySelector("#faster").addEventListener("click", function () {
//     video.playbackRate /= 0.9; // Increase speed proportionally
//     console.log(`New speed: ${video.playbackRate.toFixed(5)}`);
// });

// // Skip ahead by 10 seconds
// document.querySelector("#skip").addEventListener("click", function () {
//     video.currentTime += 10;
//     if (video.currentTime >= video.duration) {
//         video.currentTime = 0; // Reset to start if the duration is exceeded
//     }
//     console.log(`Current time: ${video.currentTime.toFixed(2)}s`);
// });

// // Mute/unmute the video
// document.querySelector("#mute").addEventListener("click", function () {
//     video.muted = !video.muted;
//     this.textContent = video.muted ? "Unmute" : "Mute"; // Update button text
// });

// // Change volume based on slider
// document.querySelector("#slider").addEventListener("input", function () {
//     video.volume = this.value / 100; // Slider value is in percentage
//     updateVolumeInfo();
// });

// // Add 'oldSchool' styling
// document.querySelector("#vintage").addEventListener("click", function () {
//     video.classList.add("oldSchool");
// });

// // Remove 'oldSchool' styling
// document.querySelector("#orig").addEventListener("click", function () {
//     video.classList.remove("oldSchool");
// });

// // Update volume information
// function updateVolumeInfo() {
//     const volumeDisplay = document.querySelector("#volume");
//     volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;
// }

var video; // video element

window.addEventListener("load", function () {
    console.log("Page loaded");

    // Initialize the video element
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;

    // Set default volume
    video.volume = 1; // Default to 100%
});

// Play the video and update volume info
document.querySelector("#play").addEventListener("click", function () {
    console.log("Play Video");
    video.play();
    updateVolumeInfo(); // Update volume when play is clicked
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
});

// Slow down the video speed
document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate *= 0.9; // Decrease speed by 10%
    console.log(`New speed: ${video.playbackRate.toFixed(5)}`);
});

// Speed up the video speed
document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate /= 0.9; // Increase speed proportionally
    console.log(`New speed: ${video.playbackRate.toFixed(5)}`);
});

// Skip ahead by 10 seconds
document.querySelector("#skip").addEventListener("click", function () {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0; // Reset to start if the duration is exceeded
    }
    console.log(`Current time: ${video.currentTime.toFixed(2)}s`);
});

// Mute/unmute the video
document.querySelector("#mute").addEventListener("click", function () {
    video.muted = !video.muted;
    this.textContent = video.muted ? "Unmute" : "Mute"; // Update button text
});

// Change volume based on slider
document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100; // Slider value is in percentage
    updateVolumeInfo();
});

// Add 'oldSchool' styling
document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

// Remove 'oldSchool' styling
document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});

// Update volume information
function updateVolumeInfo() {
    const volumeDisplay = document.querySelector("#volume");
    volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;
}
