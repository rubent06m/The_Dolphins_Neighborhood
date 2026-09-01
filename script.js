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

function scaleSite() {
  const container = document.querySelector('.MainContainer');
  const designWidth = 950;
  const availableWidth = window.innerWidth;

  let scale = availableWidth / designWidth;
  if (scale > 1) scale = 1;

  container.style.transform = `scale(${scale})`;

  const originalHeight = container.offsetHeight / (parseFloat(container.style.transform.match(/[\d.]+/)) || 1);
  document.body.style.height = (originalHeight * scale + 100) + 'px';
}

window.addEventListener('load', scaleSite);
window.addEventListener('resize', scaleSite);

function showSection(hash) {
  const id = hash.replace("#", "") || "home";
  document.querySelectorAll(".centerContent section").forEach((section) => {
    section.style.display = section.id === id ? "block" : "none";
  });
}

document.querySelectorAll('.sidebarContainerLeft a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const hash = this.getAttribute("href");
    history.pushState(null, "", hash);
    showSection(hash);
  });
});

// Muestra la sección correcta al cargar la página (respeta links directos con #)
window.addEventListener("load", () => {
  showSection(window.location.hash || "#home");
});