// Light/Dark Mode Toggle
document.getElementById("toggle-btn").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Menu Toggle for Mobile
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Countdown Timer
const countdown = () => {
  const eventDate = new Date("2025-07-10T00:00:00").getTime(); // Make sure this is in the future!
  const now = new Date().getTime();
  const gap = eventDate - now;

  if (gap < 0) {
    document.getElementById("countdown").innerHTML = "Event Started!";
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = m.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = s.toString().padStart(2, "0");
};

// Run countdown every second
setInterval(countdown, 1000);
