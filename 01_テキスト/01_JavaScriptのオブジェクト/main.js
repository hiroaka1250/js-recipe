const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}

// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。

const seisekibo = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
  { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]
const undoudekiruSeito = []
for (let i = 0; i < seisekibo.length; i++) {
  if (seisekibo[i].taiiku >= 3) {
    undoudekiruSeito.push(seisekibo[i])
  }
}
