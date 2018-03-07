let colors;
let squares = document.getElementsByClassName("square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let button = document.querySelector("#reset");
let pickedColor;
let h1 = document.querySelector("h1");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let numSquares = 6;


easy.addEventListener("click", function() {
  easy.classList.add("selected");
  hard.classList.remove("selected");
  numSquares = 3;
  generate(numSquares);
  }
)

hard.addEventListener("click", function() {
  easy.classList.remove("selected");
  hard.classList.add("selected");
  numSquares = 6;
  generate(numSquares);
})

function compare() {
  if (this.style.backgroundColor === pickedColor) {
    messageDisplay.textContent = "Correct!";
    changeColors(pickedColor);
    h1.style.backgroundColor = pickedColor;
    button.textContent = "Play again";
  } else {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try again!";
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(numbers) {
  let randomColors = [];
  for (let i = 0; i < numbers; i++) {
    let color = "rgb(" + Math.floor(Math.random() * 256) + ", " +
                Math.floor(Math.random() * 256) + ", " +
                Math.floor(Math.random() * 256) + ")";
    randomColors.push(color);
  }
  return randomColors;
};

function changeColors (color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function generate(num) {  
  colors = generateRandomColors(num);
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  button.textContent = "New Colors";
  messageDisplay.textContent = "";
}

button.addEventListener("click", function() {
  generate(numSquares);
});

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", compare)
}

generate(numSquares);