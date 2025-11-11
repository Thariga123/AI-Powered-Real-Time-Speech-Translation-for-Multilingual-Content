let mediaRecorder;
let audioChunks = [];
let isRecording = false;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const translateBtn = document.getElementById('translateBtn');
const micRing = document.getElementById('micRing');
const liveLang = document.getElementById('liveLang');
const maleBtn = document.getElementById('liveGenderMale');
const femaleBtn = document.getElementById('liveGenderFemale');
const liveText = document.getElementById('liveText');
const translatedText = document.getElementById('translatedText');
const liveAudio = document.getElementById('liveAudio');
const liveStatus = document.getElementById('liveStatus');
const liveProgress = document.getElementById('liveProgress');
const liveProgressBar = document.getElementById('liveProgressBar');

let selectedGender = 'male';
let recordedBlob = null;

// Gender switch
[maleBtn, femaleBtn].forEach(btn => {
  btn.addEventListener('click', () => {
    [maleBtn, femaleBtn].forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedGender = btn.dataset.gender;
  });
});

// Start recording
startBtn.addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);
  audioChunks = [];
  startBtn.disabled = true;
  stopBtn.disabled = false;
  translateBtn.disabled = true;
  micRing.style.animationPlayState = "running";
  liveStatus.textContent = "🎙 Recording...";
  liveStatus.className = "status show loading";

  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    recordedBlob = new Blob(audioChunks, { type: 'audio/wav' });
    stopBtn.disabled = true;
    translateBtn.disabled = false;
    liveStatus.textContent = "✅ Recording complete. Click Translate to process.";
    liveStatus.className = "status show success";
    micRing.style.animationPlayState = "paused";
    stream.getTracks().forEach(track => track.stop());
  };

  mediaRecorder.start();
});

// Stop recording
stopBtn.addEventListener('click', () => {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
});

// Translate after recording
translateBtn.addEventListener('click', async () => {
  if (!recordedBlob) return;

  const formData = new FormData();
  formData.append("audio", recordedBlob, "mic_audio.wav");
  formData.append("lang", liveLang.value);
  formData.append("gender", selectedGender);

  liveProgress.style.display = "block";
  liveProgressBar.style.width = "40%";
  liveStatus.textContent = "🔄 Translating...";
  liveStatus.className = "status show loading";

  try {
    const response = await fetch("/mic_record", { method: "POST", body: formData });
    const data = await response.json();

    liveProgressBar.style.width = "100%";
    setTimeout(() => {
      liveProgress.style.display = "none";
      liveProgressBar.style.width = "0%";
    }, 1000);

    if (data.success) {
      liveText.textContent = data.original_text || "(no speech)";
      translatedText.textContent = data.translated_text || "(translation failed)";
      liveAudio.src = data.audio_url || "";
      liveStatus.textContent = "✅ Translation complete!";
      liveStatus.className = "status show success";
    } else {
      liveStatus.textContent = "⚠️ Translation failed.";
      liveStatus.className = "status show error";
    }
  } catch (err) {
    console.error(err);
    liveStatus.textContent = "❌ Error contacting server.";
    liveStatus.className = "status show error";
  }
});
