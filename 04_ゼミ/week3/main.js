const redStar = document.getElementById("redstar");
const blueStar = document.getElementById("bluestar");
const yellowStar = document.getElementById("yerrowstar");
const ackermanSatr = document.getElementById("ackermanstar");
const answer = document.getElementById("answer");

redStar.onclick = function() {
  answer.textContent = "正解！大好き！";
}
blueStar.onclick = function() {
  answer.textContent = "惜しい！泣いていいかな？";
}
yellowStar.onclick = function() {
  answer.textContent = "惜しい！泣いていいかな？";
}
ackermanSatr.onclick = function() {
  answer.textContent = "これ選んだ君は死刑！";
}
