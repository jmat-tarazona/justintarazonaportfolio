function openResumeModal() {
  document.getElementById("resumePop").style.display = "block";
}

function closeResumeModal() {
  document.getElementById("resumePop").style.display = "none";
}

const artImages = [
  "Artwork/artwork1.jpeg",
  "Artwork/artwork2.jpeg",
  "Artwork/artwork3.jpeg",
  "Artwork/artwork4.jpeg",
  "Artwork/artwork5.jpeg",
  "Artwork/artwork6.jpeg",
  "Artwork/artwork7.jpeg",
  "Artwork/artwork8.jpeg"
];

let artIndex = 0;

function changeArt(direction) {
  artIndex = (artIndex + direction + artImages.length) % artImages.length;
  document.getElementById("artImage").src = artImages[artIndex];
}
