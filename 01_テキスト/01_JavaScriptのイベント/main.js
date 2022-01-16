const button = document.getElementById("button")

button.onclick = function () {
  alert("クリックしたね")
}

// input 要素と input イベント
document.onkeydown = function (e) {
  console.log(e.key)
}
