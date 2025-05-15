// let wButton = document.getElementsByClassName("w")[0];
// let aButton = document.getElementsByClassName("a")[0];
// let sButton = document.getElementsByClassName("s")[0];
// let dButton = document.getElementsByClassName("d")[0];
// let jButton = document.getElementsByClassName("j")[0];
// let kButton = document.getElementsByClassName("k")[0];
// let lButton = document.getElementsByClassName("l")[0];

// wButton.addEventListener("click", soundDo);
// aButton.addEventListener("click", soundRe);
// sButton.addEventListener("click", soundMi);
// dButton.addEventListener("click", soundFa);
// jButton.addEventListener("click", soundSol);
// kButton.addEventListener("click", soundLa);
// lButton.addEventListener("click", soundSi);

// function soundDo() {
//   let sDo = new Audio("assets/sounds/do.mp3");
//   sDo.currentTime = 0;
//   sDo.play();
// }
// function soundRe() {
//   let sRe = new Audio("assets/sounds/re.mp3");
//   sRe.currentTime = 0;
//   sRe.play();
//   console.log(sRe);
// }
// function soundMi() {
//   let sMi = new Audio("assets/sounds/mi.mp3");
//   sMi.currentTime = 0;
//   sMi.play();
//   console.log(sMi);
// }
// function soundFa() {
//   let sFa = new Audio("assets/sounds/fa.mp3");
//   sFa.currentTime = 0;
//   sFa.play();
//   console.log(sFa);
// }
// function soundSol() {
//   let sSol = new Audio("assets/sounds/sol.mp3");
//   sSol.currentTime = 0;
//   sSol.play();
//   console.log(sSol);
// }
// function soundLa() {
//   let sLa = new Audio("assets/sounds/lja.mp3");
//   sLa.currentTime = 0;
//   sLa.play();
//   console.log(sLa);
// }
// function soundSi() {
//   let sSi = new Audio("assets/sounds/si.mp3");
//   sSi.currentTime = 0;
//   sSi.play();
//   console.log(sSi);
// }
//=================second reselve=========================

let btns = document.getElementsByTagName("button");

for (const btn of btns) {
  btn.addEventListener("click", function () {
    switch (this.innerHTML) {
      case "w":
        let sDo = new Audio("assets/sounds/do.mp3");
        sDo.currentTime = 0;
        sDo.play();
        break;
      case "a":
        let sRe = new Audio("assets/sounds/re.mp3");
        sRe.currentTime = 0;
        sRe.play();
        break;
      case "s":
        let sMi = new Audio("assets/sounds/mi.mp3");
        sMi.currentTime = 0;
        sMi.play();
        break;
      case "d":
        let sFa = new Audio("assets/sounds/fa.mp3");
        sFa.currentTime = 0;
        sFa.play();
        break;
      case "j":
        let sSol = new Audio("assets/sounds/sol.mp3");
        sSol.currentTime = 0;
        sSol.play();
        break;
      case "k":
        let sLa = new Audio("assets/sounds/lja.mp3");
        sLa.currentTime = 0;
        sLa.play();
        break;
      case "l":
        let sSi = new Audio("assets/sounds/si.mp3");
        sSi.currentTime = 0;
        sSi.play();
        break;
    }
  });
}
