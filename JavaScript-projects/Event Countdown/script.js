const targetDate = new Date("2023-08-12T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, "0")+" days";
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0")+" hours";
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")+" minutes";
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")+" seconds";
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
