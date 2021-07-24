let batu = document.getElementById("batu");
let kertas = document.getElementById("kertas");
let gunting = document.getElementById("gunting");
let winBoard = document.getElementById("versus-h1");
let resetButton = document.getElementById("reset");
let activeClass = document.getElementsByClassName("active");
let icon = ["batu", "kertas", "gunting"];
let resultTextBegin = 'VS';
let comScore = document.getElementById("com_score")
let playerScore = document.getElementById("player_score")

resetButton.addEventListener("click", function () {
  reset();
})

function reset() {
  winBoard.textContent = resultTextBegin;
  kertas.classList.remove("active");
  gunting.classList.remove("active");
  batu.classList.remove("active");

  icon.forEach((item) => {
    let comChoiceClearElement = document.getElementById(`${item}-comp`);
    comChoiceClearElement.classList.remove("active");
  })
}

batu.addEventListener("click", function (e) {
  if (activeClass.length < 2) {
    batu.classList.add("active");
    kertas.classList.remove("active");
    gunting.classList.remove("active");
    suit('batu');
  }
})

kertas.addEventListener("click", function (e) {
  if (activeClass.length < 2) {
    kertas.classList.add("active");
    batu.classList.remove("active");
    gunting.classList.remove("active");
    suit('kertas')
  }
})

gunting.addEventListener("click", function (e) {
  if (activeClass.length < 2) {
    gunting.classList.add("active");
    batu.classList.remove("active");
    kertas.classList.remove("active");
    suit('gunting')
  }
})

function suit(choice) {
  if (activeClass.length < 2) {
    let playerChoice = choice;

    let randomNumber = Math.floor(Math.random() * 3);
    let comChoice = icon[randomNumber];

    icon.forEach((item) => {
      let comChoiceClearElement = document.getElementById(`${item}-comp`);
      comChoiceClearElement.classList.remove("active");
    })

    let comChoiceElement = document.getElementById(`${comChoice}-comp`);
    comChoiceElement.classList.add("active");

    let result = winChecking(playerChoice, comChoice);

    if (result === 'com win') {
      let textComScore = parseInt(comScore.textContent);
      comScore.textContent = textComScore + 1;
    }

    if (result === 'player win') {
      let textPlayerScore = parseInt(playerScore.textContent);
      playerScore.textContent = textPlayerScore + 1;
    }

    winBoard.textContent = result;
  }
}

function winChecking(playerChoice, comChoice) {
  if (playerChoice === comChoice) return 'draw';

  if (playerChoice === 'batu' && comChoice === 'kertas') {
    return 'com win';
  }

  if (playerChoice === 'batu' && comChoice === 'gunting') {
    return 'player win';
  }

  if (playerChoice === 'kertas' && comChoice === 'batu') {
    return 'player win';
  }

  if (playerChoice === 'kertas' && comChoice === 'gunting') {
    return 'com win';
  }

  if (playerChoice === 'gunting' && comChoice === 'batu') {
    return 'com win';
  }

  if (playerChoice === 'gunting' && comChoice === 'kertas') {
    return 'player win';
  }
}