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

  