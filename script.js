// script.js

// Set the date for the festival (July 11, 2025)
const festivalStartDate = new Date("July 11, 2025 00:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = festivalStartDate - now;

    if (timeLeft <= 0) {
        document.getElementById("timer").innerHTML = "The festival has begun!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display immediately without waiting 1 second
updateCountdown();
