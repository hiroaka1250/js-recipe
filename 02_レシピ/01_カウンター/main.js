const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const doubleButton = document.getElementById("double-button")
const dengenButton = document.getElementById("dengen-button")

let count = 0
let dengen = false
// ボタンをクリックしたときの処理を登録
dengenButton.onclick = function () {
  dengen = !dengen // !は否定→状態の否定をクリックするたびに更新する
  dengenButton.textContent = dengen ? "電源OFF" : "電源ON"
}
plusButton.onclick = function () {
  // ここにクリック後の処理を書く
  if (dengen) {
    count += 1
    display.textContent = count
  }
}
minusButton.onclick = function () {
  if (dengen) {
    count -= 1
    display.textContent = count
  }
}

doubleButton.onclick = function () {
  if (dengen) {
    count *= 2
    display.textContent = count
  }
}
