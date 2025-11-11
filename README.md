# 🌐 AI-Powered Real-Time Speech Translation for Multilingual Content

> 🎙️ An intelligent, end-to-end **AI Speech Translator Web App** that listens, understands, translates, and speaks — all in real time!

---

## 🚀 **Project Overview**
- 🧠 A full-stack web application that performs **speech-to-speech translation** using AI.  
- 🎤 Users can record their voice through the **browser microphone**.  
- 💬 The app converts **speech → text → translated text → speech** in another language.  
- 🌍 Built with **Flask**, **JavaScript**, and **deep learning APIs** for seamless multilingual communication.  
- 💎 Designed with a **teal glassmorphic UI** for a futuristic, elegant user experience.

---

## ⚙️ **Core Workflow**
1️⃣ 🎙️ **User speaks** using the microphone.  
2️⃣ 💻 **MediaRecorder API (JavaScript)** captures the live audio.  
3️⃣ 🧩 The audio is sent to the **Flask backend** for processing.  
4️⃣ 🗣️ **SpeechRecognition (Google STT)** converts the audio into text.  
5️⃣ 🌍 **Deep Translator (GoogleTranslator)** translates the text into the selected language.  
6️⃣ 🔊 **Edge TTS** (or **gTTS**) converts the translated text into natural-sounding speech.  
7️⃣ 🎧 The translated audio is played back instantly in the browser.  

---

## 💡 **Key Features**
✨ Real-time **speech recognition and translation**  
🎧 **Text-to-speech** playback in multiple voices (male/female)  
🌐 Supports **12+ Indian and global languages**  
💾 Handles **multiple audio/video formats** (MP3, WAV, MP4, etc.)  
🧩 Uses **Google & Microsoft built-in AI models** — no dataset required  
🎨 Beautiful **glass UI** with progress bars and status feedback  
⚙️ Strong **error handling** and smooth user flow  

---

## 🧠 **Technologies Used**

| Layer | Technology | Purpose |
|-------|-------------|----------|
| 🌐 Frontend | HTML, CSS, JavaScript (MediaRecorder API) | UI & audio capture |
| 🧩 Backend | Python (Flask Framework) | Server logic |
| 🗣️ Speech Recognition | `speech_recognition` | Google Speech-to-Text |
| 🌍 Translation | `deep_translator` | Google Neural Machine Translation |
| 🔊 Text-to-Speech | `edge_tts`, `gTTS` | Microsoft & Google TTS |
| 🎛 Audio Processing | `moviepy`, `pydub`, `librosa`, `soundfile` | Conversion & filtering |
| 💾 Version Control | Git, GitHub | Code hosting |

---
## 🧭 **System Architecture**
🎤 User Speech
↓
💻 MediaRecorder API (JS)
↓
🌐 Flask Backend (Python)
↓
🗣️ SpeechRecognition → Text
↓
🌍 Deep Translator → Translated Text
↓
🔊 Edge TTS / gTTS → Speech
↓
🎧 Translated Audio Playback in Browser

yaml
Copy code

---

## 🔍 **AI Models Used**
| Function | Library | Built-in Model |
|-----------|----------|----------------|
| Speech → Text | `speech_recognition` | Google Web Speech API |
| Text → Translation | `deep_translator` | Google Neural Machine Translation |
| Text → Speech | `edge_tts` | Microsoft Neural TTS |
| Fallback TTS | `gTTS` | Google Text-to-Speech Engine |

✅ These are **pre-trained models** — no dataset training required!

---

## 💻 **Setup & Installation**

### 🧩 1️⃣ Clone the repository
```bash
git clone https://github.com/Thariga123/AI-Powered-Real-Time-Speech-Translation-for-Multilingual-Content.git
cd AI-Powered-Real-Time-Speech-Translation-for-Multilingual-Content
⚙️ 2️⃣ Create & activate virtual environment
bash
Copy code
python -m venv venv
venv\Scripts\activate   # For Windows
# or
source venv/bin/activate   # For Mac/Linux
📦 3️⃣ Install required dependencies
bash
Copy code
pip install -r requirements.txt
▶️ 4️⃣ Run the Flask app
bash
Copy code
python app.py
Then open in browser:

cpp
Copy code
http://127.0.0.1:5000
🌍 Supported Languages
Code	Language
en	English
hi	Hindi
ta	Tamil
te	Telugu
kn	Kannada
ml	Malayalam
mr	Marathi
pa	Punjabi
gu	Gujarati
bn	Bengali
or	Odia
ur	Urdu

🧠 Future Enhancements
🔁 Add bi-directional live translation for conversations

🎥 Integrate video subtitling using Whisper

🧬 Use OpenAI Whisper / Wav2Vec2 for offline speech recognition

⚡ Enable real-time streaming with WebSockets

☁️ Deploy on Render / AWS / Azure for public access

🏁 Project Highlights
🧠 Uses Google’s and Microsoft’s pre-trained AI models

🎨 Fully responsive, teal glassmorphic UI

⚙️ Works across browsers with real-time mic translation

💬 Designed for multilingual communication and accessibility