const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  const card = createCard(memoInput.value)
  memoContainer.append(card)

  memoInput.value = ""
}

const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("button")
  deleteButton.className = "delete-button"
  deleteButton.textContent = "削除"
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)

  return card
}
