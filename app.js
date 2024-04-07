let boxBtn = document.querySelectorAll('.box');
let msgbutton = document.querySelector('.msg');
let resetbutton = document.querySelector('.reset');
let newGamebutton = document.querySelector('.newGame');
let msgContainer = document.querySelector('.messagecontainer');

let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]


boxBtn.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default button behavior
    console.log('button clicked each turn');
    if (turn0) {
      item.innerHTML = '0';
      turn0 = false;
    } else {
      item.innerHTML = 'X';
      turn0 = true;
    }
    item.disabled = true;
    checkWinner()
  });
});

const ResetGame = () => {
  turn0 = true;
  enabledBoxes();
  msgbutton.innerHTML = "";
  msgContainer.classList.remove('hide');
  console.log('second : ', msgContainer.classList.add('hide'));
  console.log('reset and newgame invoked');
}



const enabledBoxes = () =>{
  for(let box of boxBtn){
    box.disabled = false;
    box.innerHTML = "";
  }
};

const disabledBoxes = () =>{
  for(let box of boxBtn){
    box.disabled = true;
  }
}

const showWinner  = (winner) => {
  msgbutton.innerHTML = `Congratulation!!  User '${winner}' have won the match `;
  
  // msgContainer.classList.remove('hide')
  // console.log('first', msgContainer.classList.remove('hide'));
  disabledBoxes()
}

const checkWinner = () => {
  for (pattern of winPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxBtn[pattern[0]].innerHTML, boxBtn[pattern[1]].innerHTML, boxBtn[pattern[2].innerHTML]);
    let val1 = boxBtn[pattern[0]].innerHTML; // this line mean that when user click on particular button // button is starting from 0 as a index you can colsole.log as well
    let val2 = boxBtn[pattern[1]].innerHTML;
    let val3 = boxBtn[pattern[2]].innerHTML;

    console.log('Values:', val1, val2, val3);
    
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 == val3) {
        showWinner(val1)
        console.log('winner', val1);
        return true;
      }
    }
  }
};

newGamebutton.addEventListener('click', ResetGame)
resetbutton.addEventListener('click', ResetGame)
