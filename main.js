// PAGE ELEMENTS
const aKey = document.getElementById("a-key");
const sKey = document.getElementById("s-key");
const dKey = document.getElementById("d-key");
const fKey = document.getElementById("f-key");
const vKey = document.getElementById("v-key");
const nKey = document.getElementById("n-key");
const jKey = document.getElementById("j-key");
const kKey = document.getElementById("k-key");
const lKey = document.getElementById("l-key");
const semicolonKey = document.getElementById(";-key");

const note1 = document.getElementById("letter-note-one");
const note2 = document.getElementById("letter-note-two");
const note3 = document.getElementById("letter-note-three");
const note4 = document.getElementById("letter-note-four");
const note5 = document.getElementById("letter-note-five");
const note6 = document.getElementById("letter-note-six");
const endNote = document.getElementById("column-optional");

const word1 = document.getElementById("word-one");
const word2 = document.getElementById("word-two");
const word3 = document.getElementById("word-three");
const word4 = document.getElementById("word-four");
const word5 = document.getElementById("word-five");
const word6 = document.getElementById("word-six");

// These variables store the buttons that progress the user through the lyrics
const nextOne = document.getElementById("first-next-line");
const nextTwo = document.getElementById("second-next-line");
const nextThree = document.getElementById("third-next-line");
const startOver = document.getElementById("fourth-next-line");

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Global array
const keyArr = [
  aKey,
  sKey,
  dKey,
  fKey,
  vKey,
  nKey,
  jKey,
  kKey,
  lKey,
  semicolonKey
];

// ==========================FUNCTIONS==============================
// This function allow to close the instructions page with ESC
document.onkeydown = e => {
  let music = document.querySelector(".instructions");
  let isActive = music.classList.contains("active");
  keyCode = e.code;
  let close = document.querySelector(".close");

  if (isActive && keyCode == "Escape") close.click();
};

// This function allow to trigger the key notes at any time
const playKey = (id, key) => {
  key.style.backgroundColor = "#03faef";
  document.getElementById(id).pause();
  document.getElementById(id).currentTime = 0;
  document.getElementById(id).play();
};

// Counter to move forward with lyrics stages
let spaceCounter = 0;
// this function trigger the piano sound on the keyboard, display the lyric by blocks and restart
document.addEventListener("keydown", function(ev) {
  ev.preventDefault();
  if (ev.code == "KeyA") playKey("mid-c", aKey);
  if (ev.code == "KeyS") playKey("mid-d", sKey);
  if (ev.code == "KeyD") playKey("high-e", dKey);
  if (ev.code == "KeyF") playKey("high-f", fKey);
  if (ev.code == "KeyV") playKey("high-g", vKey);
  if (ev.code == "KeyN") playKey("high-a", nKey);
  if (ev.code == "KeyJ") playKey("high-b", jKey);
  if (ev.code == "KeyK") playKey("mid-c", kKey);
  if (ev.code == "KeyL") playKey("high-d", lKey);
  if (ev.code == "Semicolon") playKey("high-e", semicolonKey);
  if (ev.code === "Space") {
    spaceCounter++;
    if (spaceCounter == 1) {
      nextTwo.hidden = false;
      nextOne.hidden = true;
      note5.innerHTML = "R4";
      note6.innerHTML = "R3";
    } else if (spaceCounter == 2) {
      nextThree.hidden = false;
      nextTwo.hidden = true;
      word5.innerHTML = "DEAR";
      word6.innerHTML = "FRI-";
      endNote.style.display = "inline-block";
      note3.innerHTML = "R5";
      note4.innerHTML = "R4";
      note5.innerHTML = "R3";
      note6.innerHTML = "R2";
    } else if (spaceCounter == 3) {
      startOver.hidden = false;
      nextThree.hidden = true;
      word1.innerHTML = "HAP-";
      word2.innerHTML = "PY";
      word3.innerHTML = "BIRTH";
      word4.innerHTML = "DAY";
      word5.innerHTML = "TO";
      word6.innerHTML = "YOU!";
      note1.innerHTML = "L2";
      note2.innerHTML = "L2";
      note3.innerHTML = "R5";
      note4.innerHTML = "R3";
      note5.innerHTML = "R4";
      note6.innerHTML = "R3";
      endNote.style.display = "none";
    }
  }
  if (ev.code == "Enter") {
    nextOne.hidden = false;
    startOver.hidden = true;
    word1.innerHTML = "HAP-";
    note1.innerHTML = "L1";
    word2.innerHTML = "PY";
    note2.innerHTML = "L1";
    word3.innerHTML = "BIRTH-";
    note3.innerHTML = "R1";
    word4.innerHTML = "DAY";
    note4.innerHTML = "L1";
    word5.innerHTML = "TO";
    note5.innerHTML = "R3";
    word6.innerHTML = "YOU";
    note6.innerHTML = "R2";
    spaceCounter = 0;
  }
});

// This event listener reset the background color of the piano keys on key up
document.addEventListener("keyup", function() {
  keyArr.forEach(el => (el.style.backgroundColor = ""));
});

// This function and the following two event listeners show the instructions and return to the piano by click
togglePlayer = () => {
  document.querySelector(".instructions").classList.toggle("active");
};

document.querySelector(".close").addEventListener("click", togglePlayer);
document.querySelector(".close2").addEventListener("click", togglePlayer);
