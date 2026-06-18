function playAudio() {
    const audio = document.getElementById("bg-audio");
    audio.play().then(() => {
      document.getElementById("play-btn").style.display = "none";
      document.getElementById("stop-btn").style.display = "inline-block";
    }).catch((e) => {
      console.log("Playback failed:", e);
    });
  }
  
  function stopAudio() {
    const audio = document.getElementById("bg-audio");
    audio.pause();
    audio.currentTime = 0; // rewind to start
    document.getElementById("stop-btn").style.display = "none";
    document.getElementById("play-btn").style.display = "inline-block";
  }

// Save user language preference
document.getElementById('en-link')?.addEventListener('click', () => {
  localStorage.setItem('lang', 'en');
});
document.getElementById('hi-link')?.addEventListener('click', () => {
  localStorage.setItem('lang', 'hi');
});

// Auto redirect to preferred language on load
window.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang');
  const current = window.location.pathname;

  if (lang === 'hi' && !current.includes('hindi.html')) {
    window.location.href = 'hindi.html';
  } else if (lang === 'en' && !current.includes('index.html')) {
    window.location.href = 'index.html';
  }
});

let fuel = 0;
let co2 = 0;
let delay = 0;
let violations = 0;

function animateValue(id, start, end, suffix = "") {

  let current = start;

  const increment = (end - start) / 25;

  document.getElementById(id).classList.add("pulse");

  setTimeout(() => {
    document.getElementById(id).classList.remove("pulse");
  }, 500);

  const timer = setInterval(() => {

    current += increment;

    if (
      (increment > 0 && current >= end) ||
      (increment < 0 && current <= end)
    ) {
      current = end;
      clearInterval(timer);
    }

    document.getElementById(id).innerHTML =
      (suffix === " L" || suffix === " kg")
        ? current.toFixed(2) + suffix
        : Math.round(current) + suffix;

  }, 20);

}

window.showReward = function() {

  let oldFuel = fuel;
  let oldCo2 = co2;
  let oldDelay = delay;
  let oldViolations = violations;

  fuel += 0.05;
  co2 += 0.12;
  delay += 3;
  violations += 1;

  animateValue("fuel", oldFuel, fuel, " L");
  animateValue("co2", oldCo2, co2, " kg");
  animateValue("delay", oldDelay, delay, " min");
  animateValue("violations", oldViolations, violations);

  document.getElementById("rewardMessage").style.display =
    "block";

  /* Citizen Badge */

  const badge =
  document.getElementById("citizenBadge");

  if (violations >= 10) {

    badge.innerHTML =
    "🥇 Urban Mobility Champion";

  } else if (violations >= 5) {

    badge.innerHTML =
    "🥈 Smart City Supporter";

  } else {

    badge.innerHTML =
    "🥉 Responsible Citizen";
  }
  };