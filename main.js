//音楽ボタン
let music = new Audio()
function init() {
  music.preload = "auto"
  music.src = "My Song 3.m4a"
  music.load()

  music.addEventListener("ended", function() {
    music.currentTime = 0
    music.play()
  })
}

function play() {
  music.loop = true
  music.play()
}
function stop() {
  music.pause()
  music.currentTime = 0
}
init()

//
// スライドショー
const pics_src = [
  "pics/IMG_0036.JPG",
  "pics/IMG_1024.jpg",
  "pics/IMG_0041.JPG",
  "pics/IMG_0985.JPG",
  "pics/2.jpg",
  "pics/5.jpg",
  "pics/IMG_0993.jpg",
  "pics/IMG_1022.jpg",
  "pics/1.jpg",
  "pics/4.jpg",
  "pics/IMG_0996.jpg",
  "pics/IMG_1021.jpg",
  "pics/IMG_0997.jpg",
  "pics/6.jpg",
  "pics/IMG_0999.jpg",
  "pics/IMG_1023.jpg",
  "pics/3.jpg",
  "pics/IMG_1002.jpg",
  "pics/IMG_1003.jpg",
  "pics/IMG_1004.jpg",
  "pics/main.jpg",
]

let num = -1

function slideshow_timer() {
  if (num === 20) {
    num = 0
  } else {
    num++
  }
  document.getElementById("mypics").src = pics_src[num]
}

setInterval(slideshow_timer, 1500)
