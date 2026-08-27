// Your songs
const songs = [
  {
    name: "FORGOTTEN AT FREDBEARS OST",
    src: "/audio/FORGOTTEN AT FREDBEARS OST - Extras Menu Extended.mp3",
  },
  {
    name: "FREDDYS REANIMATED EXTRAS OST",
    src: "/audio/Freddys Reanimated - Extras Concrete Magritte looped.mp3",
  },
  { name: "Song 3", src: "/path/to/song3.mp3" },
];

let currentIndex = 0;
const audio = document.getElementById("audio");
const songName = document.getElementById("song-name");

// Load song
function loadSong(index) {
  audio.src = songs[index].src;
  songName.textContent = songs[index].name;
  currentIndex = index;
}

function playMusic() {
  if (audio.src === "") {
    loadSong(0); // Load first song if nothing is loaded
  }
  audio.play();
}

function pauseMusic() {
  audio.pause();
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  playMusic();
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  playMusic();
}

function setVolume() {
  const vol = document.getElementById("vol").value;
  audio.volume = vol / 100;
}

// Default state
songName.textContent = "No song selected";

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", window.location.pathname);
    }
  });
});
