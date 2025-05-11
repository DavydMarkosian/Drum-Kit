let wButton = document.getElementsByClassName("w")[0];
let aButton = document.getElementsByClassName("a")[0];
let sButton = document.getElementsByClassName("s")[0];
let dButton = document.getElementsByClassName("d")[0];
let jButton = document.getElementsByClassName("j")[0];
let kButton = document.getElementsByClassName("k")[0];
let lButton = document.getElementsByClassName("l")[0];
console.log(aButton);

wButton.addEventListener("click", soundDo);
aButton.addEventListener("click", soundRe);
sButton.addEventListener("click", soundMi);
dButton.addEventListener("click", soundFa);
jButton.addEventListener("click", soundSol);
kButton.addEventListener("click", soundLa);
lButton.addEventListener("click", soundSi);

function soundDo() {
  let sDo = document.getElementById("soundDo");
  sDo.currentTime = 0;
  sDo.play();
  console.log(sDo);
}
function soundRe() {
  let sRe = document.getElementById("soundRe");
  sRe.currentTime = 0;
  sRe.play();
  console.log(sRe);
}
function soundMi() {
  let sMi = document.getElementById("soundMi");
  sMi.currentTime = 0;
  sMi.play();
  console.log(sMi);
}
function soundFa() {
  let sFa = document.getElementById("soundFa");
  sFa.currentTime = 0;
  sFa.play();
  console.log(sFa);
}
function soundSol() {
  let sSol = document.getElementById("soundSol");
  sSol.currentTime = 0;
  sSol.play();
  console.log(sSol);
}
function soundLa() {
  let sLa = document.getElementById("soundLa");
  sLa.currentTime = 0;
  sLa.play();
  console.log(sLa);
}
function soundSi() {
  let sSi = document.getElementById("soundSi");
  sSi.currentTime = 0;
  sSi.play();
  console.log(sSi);
}
