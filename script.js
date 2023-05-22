// HTML Audio element to play the music
var audio = new Audio();

// Array of music URLs
var musicList = [
  "music1.mp3",
  "music2.mp3",
  "music3.mp3"
];

// Function to play random music
function playRandomMusic() {
  // Generate a random index
  var randomIndex = Math.floor(Math.random() * musicList.length);
  
  // Get the URL of the random music
  var randomMusic = musicList[randomIndex];
  
  // Set the audio source to the random music URL
  audio.src = randomMusic;
  
  // Play the music
  audio.play();
}

// Call the function to play random music when the page is loaded or reloaded
window.addEventListener('load', playRandomMusic);
