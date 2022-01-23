const number = 24

if (number % 3 === 0) {
  console.log(number + "!!!!!!!")
} else {
  console.log(number)
}

// n に入っている値を 1 から、 number まで、 1 ずつ増やしながら、 {} の中身を繰り返す
for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!!!!")
  } else {
    console.log(n)
  }
}

// 引数 number を受け取る関数
const genkiFunction = function (number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

const fizBuZZ = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log("FizzBuzz")
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}

const genkiFunction2 = function (number) {
  for (let n = 1; n <= number; n++) {
    const stringNumbers = String(n).split("")
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else if (stringNumbers.includes("3")) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

let startNumber = 0
const countUp = function () {
  startNumber += 1
  if (startNumber % 3 === 0) {
    console.log(`${startNumber}!!!!!`)
  } else {
    console.log(startNumber)
  }
}
const genkiFunction3 = function () {
  setInterval(countUp, 1000)
}
