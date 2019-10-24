// PAGE ELEMENTS
let aKey = document.getElementById('a-key');
let sKey = document.getElementById('s-key');
let dKey = document.getElementById('d-key');
let fKey = document.getElementById('f-key');
let vKey = document.getElementById('v-key');
let nKey = document.getElementById('n-key');
let jKey = document.getElementById('j-key');
let kKey = document.getElementById('k-key');
let lKey = document.getElementById('l-key');
let semicolonKey = document.getElementById(';-key');

// This array will be used in the future...as soon as I figure out how :(=)
let keyArr = [aKey, sKey, dKey, fKey, vKey, nKey, jKey, kKey, lKey, semicolonKey];
// keyArr.forEach(el => el.style.backgroundColor = '#6df0c2')

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// This function close the instructions with ESC
document.onkeydown = e => {
  let music = document.querySelector(".instructions");
  let isActive = music.classList.contains("active");
  keyCode = e.code;
  let close = document.querySelector(".close");

  if (isActive && keyCode == "Escape") close.click();
}

// Counter to move forward with lyrics stages
let spaceCounter = 0;

// this event listener trigger the piano sound on the keyboard, display the lyric by blocks and restart
document.addEventListener('keydown', function (ev) {
  ev.preventDefault();
  if (ev.code == "KeyA") {
    aKey.style.backgroundColor = "#03faef";
    document.getElementById("mid-c").pause();
    document.getElementById("mid-c").currentTime = 0;
    document.getElementById("mid-c").play();
  }
  if (ev.code == "KeyS") {
    sKey.style.backgroundColor = "#03faef";
    document.getElementById("mid-d").pause();
    document.getElementById("mid-d").currentTime = 0;
    document.getElementById("mid-d").play();
  }
  if (ev.code == "KeyD") {
    dKey.style.backgroundColor = "#03faef";
    document.getElementById("high-e").pause();
    document.getElementById("high-e").currentTime = 0;
    document.getElementById("high-e").play();
  }
  if (ev.code == "KeyF") {
    fKey.style.backgroundColor = "#03faef";
    document.getElementById("high-f").pause();
    document.getElementById("high-f").currentTime = 0;
    document.getElementById("high-f").play();
  }
  if (ev.code == "KeyV") {
    vKey.style.backgroundColor = "#03faef";
    document.getElementById("high-g").pause();
    document.getElementById("high-g").currentTime = 0;
    document.getElementById("high-g").play();
  }
  if (ev.code == "KeyN") {
    nKey.style.backgroundColor = "#03faef";
    document.getElementById("high-a").pause();
    document.getElementById("high-a").currentTime = 0;
    document.getElementById("high-a").play();
  }
  if (ev.code == "KeyJ") {
    jKey.style.backgroundColor = "#03faef";
    document.getElementById("high-b").pause();
    document.getElementById("high-b").currentTime = 0;
    document.getElementById("high-b").play();
  }
  if (ev.code == "KeyK") {
    kKey.style.backgroundColor = "#03faef";
    document.getElementById("mid-c").pause();
    document.getElementById("mid-c").currentTime = 0;
    document.getElementById("mid-c").play();
  }
  if (ev.code == "KeyL") {
    lKey.style.backgroundColor = "#03faef";
    document.getElementById("high-e").pause();
    document.getElementById("high-d").currentTime = 0;
    document.getElementById("high-d").play();
  }
  if (ev.code == 'Semicolon') {
    semicolonKey.style.backgroundColor = "#03faef";
    document.getElementById("high-e").pause();
    document.getElementById("high-e").currentTime = 0;
    document.getElementById("high-e").play();
  }
  if (ev.code === "Space") {
    spaceCounter++
    if (spaceCounter == 1) {
      nextTwo.hidden = false;
      nextOne.hidden = true;
      document.getElementById("letter-note-five").innerHTML = "R4";
      document.getElementById("letter-note-six").innerHTML = "R3";

    } else if (spaceCounter == 2) {
      nextThree.hidden = false;
      nextTwo.hidden = true;

      document.getElementById("word-five").innerHTML = "DEAR";
      document.getElementById("word-six").innerHTML = "FRI-";

      lastLyric.style.display = "inline-block";

      document.getElementById("letter-note-three").innerHTML = "R5";
      document.getElementById("letter-note-four").innerHTML = "R4";
      document.getElementById("letter-note-five").innerHTML = "R3";
      document.getElementById("letter-note-six").innerHTML = "R2";

    } else if (spaceCounter == 3) {
      startOver.hidden = false;
      nextThree.hidden = true;

      document.getElementById("word-one").innerHTML = "HAP-";
      document.getElementById("word-two").innerHTML = "PY";
      document.getElementById("word-three").innerHTML = "BIRTH";
      document.getElementById("word-four").innerHTML = "DAY";
      document.getElementById("word-five").innerHTML = "TO";
      document.getElementById("word-six").innerHTML = "YOU!";

      document.getElementById("letter-note-one").innerHTML = "L2";
      document.getElementById("letter-note-two").innerHTML = "L2";
      document.getElementById("letter-note-three").innerHTML = "R5";
      document.getElementById("letter-note-four").innerHTML = "R3";
      document.getElementById("letter-note-five").innerHTML = "R4";
      document.getElementById("letter-note-six").innerHTML = "R3";

      lastLyric.style.display = "none";
    }
  }
  // This is the event handler function for the startOver button
  if (ev.code == 'Enter') {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'L1';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'L1';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'R1';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'L1';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'R3';
    document.getElementById('word-six').innerHTML = 'YOU';
    document.getElementById('letter-note-six').innerHTML = 'R2';
    spaceCounter = 0;
  }
})

// This event listener reset the background color of the piano keys on key up
document.addEventListener('keyup', function (ev) {
  ev.preventDefault();
  if (ev.code == "KeyA") {
    aKey.style.backgroundColor = "";
  }
  if (ev.code == "KeyS") {
    sKey.style.backgroundColor = "";
  }
  if (ev.code == "KeyD") {
    dKey.style.backgroundColor = "";
  }
  if (ev.code == "KeyF") {
    fKey.style.backgroundColor = "";
  }
  if (ev.code == "KeyV") {
    vKey.style.backgroundColor = "";
  }
  if (ev.code == "KeyN") {
    nKey.style.backgroundColor = "";
  }
  if (ev.code == "KeyJ") {
    jKey.style.backgroundColor = "";
  }
  if (ev.code == "KeyK") {
    kKey.style.backgroundColor = "";
  }
  if (ev.code == "KeyL") {
    lKey.style.backgroundColor = "";
  }
  if (ev.code == 'Semicolon') {
    semicolonKey.style.backgroundColor = "";
  }
});

// This function and the following two event listeners show the instructions and return to the piano by click
togglePlayer = e => {
  let instructions = document.querySelector(".instructions");
  instructions.classList.toggle("active");
}

document.querySelector(".close").addEventListener("click", togglePlayer);
document.querySelector(".close2").addEventListener("click", togglePlayer);