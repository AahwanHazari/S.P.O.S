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
