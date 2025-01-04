// Album Recommendations
const albums = {
    1: [
      { "title": "Mama's Gun", "artist": "Erykah Badu", "cover": "covers/1a.jpg" },
      { "title": "Mood Valiant", "artist": "Hiatus Kaiyote", "cover": "covers/1b.jpeg" },
      { "title": "The Omnichord Real Book", "artist": "Meshell Ndegeocello", "cover": "covers/1c.jpg" },
      { "title": "Girl In The Half Pearl", "artist": "Liv.e", "cover": "covers/1d.jpeg" },
      { "title": "1st Born Second", "artist": "Bilal", "cover": "covers/1e.jpg" },
      { "title": "Overload", "artist": "Georgia Anne Muldrow", "cover": "covers/1f.jpg" },
      { "title": "Subject", "artist": "Dwele", "cover": "covers/1g.jpg" },
      { "title": "Sometimes A Rose Will Grow In Concrete", "artist": "Sy Smith", "cover": "covers/1h.jpeg" }
    ],
    2: [
      { "title": "Lahai", "artist": "Sampha", "cover": "covers/2a.jpeg" },
      { "title": "The Moon and the Melodies", "artist": "Cocteau Twins", "cover": "covers/2b.jpg" },
      { "title": "Sensaciones", "artist": "Sen Serra", "cover": "covers/2c.jpeg" },
      { "title": "Lost and Found", "artist": "J. Smith", "cover": "covers/2d.jpg" },
    { "title": "Love Deluxe", "artist": "Sade", "cover": "covers/2e.jpg" },
    { "title": "Messy", "artist": "Olivia Dean", "cover": "covers/2f.jpeg" },
    { "title": "The Miseducation of Lauryn Hill", "artist": "Lauryn Hill", "cover": "covers/2g.jpg" }
        ],
    3: [
      { "title": "Souvlaki", "artist": "Slowdive", "cover": "covers/3a.jpeg" },
      { "title": "Hades", "artist": "My Dead Girlfriend", "cover": "covers/3b.jpeg" },
      { "title": "第二集", "artist": "yourboyfriendsucks!", "cover": "covers/3c.jpg" },
      { "title": "For Lovers", "artist": "Lamp", "cover": "covers/3d.jpeg" },
      { "title": "0", "artist": "Ichiko Aoba", "cover": "covers/3e.jpeg" },
      { "title": "Gentle Moon", "artist": "Pocari Sweet", "cover": "covers/3f.jpeg" }
    ],
    4: [
      { "title": "Rose Main Reading Room", "artist": "Peel Dream Magazine", "cover": "covers/4a.jpg" },
      { "title": "Is It Time to Eat the Rich Yet?", "artist": "The F16s", "cover": "covers/4b.webp" },
      { "title": "Bismillah", "artist": "Peter Cat Recording Co.", "cover": "covers/4c.jpeg" },
      { "title": "Portrait of a Time", "artist": "Peter Cat Recording Co.", "cover": "covers/4d.jpeg" },
      { "title": "Jaago", "artist": "Lifafa", "cover": "covers/4e.jpeg" },
      { "title": "Quiet Signs", "artist": "Jessica Pratt", "cover": "covers/4f.png" },
      { "title": "Parallelograms", "artist": "Linda Perhacs", "cover": "covers/4g.jpg" },
      { "title": "Lookaftering", "artist": "Vashti Bunyan", "cover": "covers/4h.jpg" },
      { "title": "Titanic Rising", "artist": "Weyes Blood", "cover": "covers/4i.jpeg" },
      { "title": "Capacity", "artist": "Big Thief", "cover": "covers/4j.webp" },
      { "title": "Any Light", "artist": "Loving", "cover": "covers/4l.webp" },
      { "title": "Riot on an Empty Street", "artist": "Kings of Convenience", "cover": "covers/4m.jpg" },
      { "title": "Shame Shame", "artist": "Dr. Dog", "cover": "covers/4n.jpeg" }
    ],
    5: [
      { "title": "Between Calm and Passion", "artist": "Festival Orchestra", "cover": "covers/5a.jpeg" },
      { "title": "Le Grand Bleu", "artist": "Eric Serra", "cover": "covers/5b.jpg" },
      { "title": "Undertale Soundtrack", "artist": "Toby Fox", "cover": "covers/5c.jpeg" },
      { "title": "The Castle in the Sky Soundtrack", "artist": "Joe Hisaishi", "cover": "covers/5d.jpeg" },
      { "title": "How to Train Your Dragon", "artist": "John Powell", "cover": "covers/5e.jpg" },
      { "title": "Drive My Car Soundtrack", "artist": "Eiko Ishibashi", "cover": "covers/5f.jpeg" }
    ],
    6: [
      { "title": "Quicksand", "artist": "Bialystocks", "cover": "covers/6a.jpg" },
      { "title": "Shade", "artist": "Iri", "cover": "covers/6b.jpg" },
      { "title": "3", "artist": "Kirinji", "cover": "covers/6c.jpg" },
      { "title": "夢が醒めたら", "artist": "ZooKaraderu", "cover": "covers/6d.jpeg" },
      { "title": "恋人へ", "artist": "Lamp", "cover": "covers/6e.jpg" },
      { "title": "SEYCHELLES", "artist": "Masayoshi Takanaka", "cover": "covers/6f.jpeg" },
      { "title": "The Bay", "artist": "Suchmos", "cover": "covers/6g.jpg" },
      { "title": "0.1 flaws and all.", "artist": "Wave to Earth", "cover": "covers/6h.jpeg" }
    ],
    7: [
        { "title": "No Side", "artist": "Yumi Matsutoya", "cover": "covers/7a.jpg" },
        { "title": "Timely", "artist": "Anri", "cover": "covers/7b.jpg" },
        { "title": "Prologue", "artist": "Akina Nakamori", "cover": "covers/7c.jpg" },
        { "title": "Light'n Up", "artist": "Miyuki Yoshida", "cover": "covers/7d.jpg" },
        { "title": "Let's Get Crazy", "artist": "Princess Princess", "cover": "covers/7e.jpeg" },
        { "title": "Bible", "artist": "Seiko Matsuda", "cover": "covers/7f.webp" },
        { "title": "Adventure", "artist": "Momoko Kikuchi", "cover": "covers/7g.jpg" },
        { "title": "Voyager", "artist": "Yumi Matsutoya", "cover": "covers/7h.jpg" },
        { "title": "Request", "artist": "Masayoshi Takeuchi", "cover": "covers/7i.jpg" }
      ],
    8: [
        { "title": "You, Clouds, Rain", "artist": "Heize", "cover": "covers/8a.jpeg" },
        { "title": "Spring in Winter", "artist": "Dept", "cover": "covers/8b.jpeg" },
        { "title": "Summer Episodes", "artist": "PH-1", "cover": "covers/8c.jpeg" },
        { "title": "Depacse Ohw", "artist": "Seori", "cover": "covers/8d.jpg" },
        { "title": "Love Part 1", "artist": "Colde", "cover": "covers/8e.jpeg" },
        { "title": "Maison", "artist": "Jiwoo", "cover": "covers/8f.jpg" },
        { "title": "Palette", "artist": "IU", "cover": "covers/8g.jpg" }
      ]
  }
  ;
  
const params = new URLSearchParams(window.location.search);
const girlId = params.get('girl');

const albumCover = document.getElementById("album-cover");
const albumTitle = document.getElementById("album-title");
const albumArtist = document.getElementById("artist-name");
const rewindButton = document.getElementById("rewind-album");
const nextAlbumButton = document.getElementById("next-album");

function displayAlbum() {
  if (albums[girlId]) {
    const randomAlbum = albums[girlId][Math.floor(Math.random() * albums[girlId].length)];
    albumCover.src = `${randomAlbum.cover}`;
    albumTitle.textContent = randomAlbum.title;
    albumArtist.textContent = `By ${randomAlbum.artist}`;
  } else {
    albumTitle.textContent = "No album recommendation found!";
    albumArtist.textContent = "";
    albumCover.src = "";
  }
}

rewindButton.addEventListener("click", () => {
  window.location.href = "girls.html";
});

nextAlbumButton.addEventListener("click", displayAlbum);

displayAlbum();
