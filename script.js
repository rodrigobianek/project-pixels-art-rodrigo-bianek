// Exercicio 1 - Adicione à página o título "Paleta de Cores";
const defaultbg = '#FFFFFFF';
const defaultBoard = () => {
  const pixelsinfo = Array.from(document.querySelectorAll('.pixel'));
  const localStorageDefault = [];
  for (let p = 0; p < pixelsinfo.length; p += 1) {
    const defaultColor = { color: pixelsinfo[p].style.backgroundColor = defaultbg };
    localStorageDefault.push(defaultColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(localStorageDefault));
};
// Exercicio 2 - Adicinando uma paleta de cores contendo quatro cores distintas;

const firstSection = document.createElement('section');
document.getElementsByTagName('main')[0].appendChild(firstSection);

const colorsDiv = document.createElement('div');
colorsDiv.id = 'color-palette';
firstSection.appendChild(colorsDiv);

const menuDiv = document.createElement('div');
menuDiv.id = 'menu';
firstSection.appendChild(menuDiv);

const createDiv = (color) => {
  const divPalette = document.createElement('div');
  divPalette.className = 'color';
  divPalette.id = color;
  divPalette.style.backgroundColor = color;
  colorsDiv.appendChild(divPalette);
};

// Exercicio 3 - Adicione a cor preta como a primeira cor da paleta de cores

createDiv('black');
createDiv('blue');
createDiv('green');
createDiv('red');

// Exercicio 4 - Adicione um botão para gerar cores aleatórias;

const btnRandom = document.createElement('button');
btnRandom.id = 'button-random-color';
btnRandom.innerText = 'Cores aleatórias';
colorsDiv.appendChild(btnRandom);

const randomRgb = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const setLocalStorage = () => {
  if (!localStorage.key('colorPalette')) {
    localStorage.setItem('colorPalette', JSON.stringify({
      black: 'black',
      blue: 'blue',
      green: 'green',
      red: 'red',
    }));
  } else if (!localStorage.key('pixelBoard')) {
    defaultBoard();
  }
};
setLocalStorage();

const saveState = () => {
  const status = {
    black: document.querySelector('#black').style.backgroundColor,
    blue: document.querySelector('#blue').style.backgroundColor,
    green: document.querySelector('#green').style.backgroundColor,
    red: document.querySelector('#red').style.backgroundColor,
  };
  const stringStatus = JSON.stringify(status);
  localStorage.setItem('colorPalette', stringStatus);
};

const returnState = () => {
  const stringStatus = JSON.parse(localStorage.getItem('colorPalette'));
  document.querySelector('#black').style.backgroundColor = stringStatus.black;
  document.querySelector('#blue').style.backgroundColor = stringStatus.blue;
  document.querySelector('#green').style.backgroundColor = stringStatus.green;
  document.querySelector('#red').style.backgroundColor = stringStatus.red;
};
returnState();

btnRandom.addEventListener('click', () => {
  const classColor = document.querySelectorAll('.color');
  for (let index = 1; index < classColor.length; index += 1) {
    classColor[index].style.backgroundColor = `rgb(${randomRgb(0, 255)},
    ${randomRgb(0, 255)},
    ${randomRgb(0, 255)}`;
  }
  saveState();
});
// Exercicio 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página

// Exercicio 6 - Adicione à página um quadro contendo 25 pixels
const sectionTwo = document.createElement('section');
document.getElementsByTagName('main')[0].appendChild(sectionTwo);

const pixelSize = 40;
const divPixelsBoard = document.createElement('div');
divPixelsBoard.style.width = '210px';
divPixelsBoard.style.height = '210px';
divPixelsBoard.id = 'pixel-board';
sectionTwo.appendChild(divPixelsBoard);

const mainBoard = document.getElementById('pixel-board');

const addPixels = (num) => {
  for (let index = 0; index < num; index += 1) {
    const pixelBlock = document.createElement('div');
    pixelBlock.className = 'pixel';
    pixelBlock.style.backgroundColor = 'rgb(255,255,255)';
    pixelBlock.style.width = `'${pixelSize}px'`;
    pixelBlock.style.width = `'${pixelSize}px'`;
    divPixelsBoard.appendChild(pixelBlock);
  }
};
addPixels(25);

const recoverDraw = () => {
  if (localStorage.getItem('pixelBoard') !== null) {
    const pixelStorage = JSON.parse(localStorage.getItem('pixelBoard'));
    const recoveredBoard = [];
    pixelStorage.forEach((n) => {
      recoveredBoard.push(n.color);
    });
    const pixelsinfo = Array.from(document.querySelectorAll('.pixel'));
    for (let index = 0; index < pixelsinfo.length; index += 1) {
      pixelsinfo[index].style.backgroundColor = recoveredBoard[index];
    }
  } else {
    console.log('Não há blocos pintados!');
  }
};

// Exercicio 7 - Faça com que cada pixel tenha largura e altura de 40 px
// e borda preta de 1px;

// Exercicio 8 - Defina a cor preta como cor inicial da paleta de cores;
const removeSelected = () => {
  const selected = Array.from(document.querySelectorAll('.selected'));
  for (let index = 0; index < selected.length; index += 1) {
    index.classList.remove('selected');
  }
};

window.onload = () => {
  removeSelected();
  document.querySelector('#black').classList.add('selected');
};

// Exercicio 9 - Crie uma função para selecionar uma cor na paleta de cores;
// a cor clicada deve ser a única selecionada.

const selectColor = (event) => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach((element) => {
    element.classList.remove('selected');
  });
  event.target.classList.toggle('selected');
};
colorsDiv.addEventListener('click', selectColor);

// Exercicio 10 - Crie uma função que permita preencher um pixel do quadro com a
// cor selecionada na paleta de cores
const saveDraw = () => {
  const pixelsinfo = Array.from(document.querySelectorAll('.pixel'));
  const localStoragePixels = [];
  pixelsinfo.forEach((p) => {
    const pixelColor = { color: p.style.backgroundColor };
    localStoragePixels.push(pixelColor);
  });
  localStorage.setItem('pixelBoard', JSON.stringify(localStoragePixels));
};

const saveBoardStyle = () => {
  const pixelsinfo = Array.from(document.querySelectorAll('.pixel'));
  const boardProperties = {
    size: pixelSize,
    width: mainBoard.style.width,
    height: mainBoard.style.height,
    pixels: pixelsinfo.length,
  };
  localStorage.boardSize = JSON.stringify(boardProperties);
};

const applyColor = (e) => {
  e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  e.target.classList.toggle('painted');
  saveDraw();
};

function addEventToBoard() {
  const pixels = Array.from(document.querySelectorAll('.pixel'));
  pixels.forEach((element) => {
    element.addEventListener('click', applyColor);
  });
}
addEventToBoard();

// Exercicio 11 - Crie um botão que retorne a cor do quadro para a cor inicial;
const resetBtn = document.createElement('button');
resetBtn.id = 'clear-board';
resetBtn.innerText = 'Limpar';
document.querySelector('#color-palette').parentNode.appendChild(resetBtn);

resetBtn.addEventListener('click', () => {
  document.querySelectorAll('.pixel').forEach((e) => {
    e.style.backgroundColor = 'rgb(255,255,255)';
    e.classList.remove('painted');
    defaultBoard();
  });
});

// Exercicio 12 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage;

// Exercicio 13 - Crie um input que permita à pessoa usuária preencher um novo tamanho
// para o quadro de pixels

const inputSize = document.createElement('div');
inputSize.id = 'input';
firstSection.firstChild.nextElementSibling.appendChild(inputSize);

const addInput = document.createElement('input');
addInput.id = 'board-size';
addInput.type = 'number';
addInput.placeholder = 'Qtd. Pixels: 5 ~ 50';
addInput.min = '1';
addInput.max = '50';
addInput.maxlength = '2';
inputSize.appendChild(addInput);

const inputBtn = document.createElement('button');
inputBtn.id = 'generate-board';
inputBtn.innerText = 'VQV';
inputSize.appendChild(inputBtn);

const inputValue = document.querySelector('#board-size');

const newSizeBoard = () => {
  mainBoard.style.height = `${inputValue.value * (pixelSize + 2)}px`;
  mainBoard.style.width = `${inputValue.value * (pixelSize + 2)}px`;
  mainBoard.innerHTML = '';
  const newPixelsDiv = (inputValue.value) * (inputValue.value);
  addPixels(newPixelsDiv);
  addEventToBoard();
};

// Exercicio 14 - Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels

inputBtn.addEventListener('click', () => {
  localStorage.removeItem('pixelBoard');
  if (inputValue.value >= 5 && inputValue.value < 50) {
    newSizeBoard();
  } else if (inputValue.value >= 50) {
    inputValue.value = 50;
    newSizeBoard();
  } else {
    alert('Board inválido!');
  }
  saveBoardStyle();
});
// Exercicio 15 - Crie uma função pra manter o tamanho do board ao recarregar a pagina;
// function savedDraw() => {}

function recoverBoardSize() {
  if (localStorage.getItem('boardSize')) {
    const recoverSize = JSON.parse(localStorage.getItem('boardSize'));
    const pixelsLength = document.getElementsByClassName('pixel').length;
    if (recoverSize.pixels !== pixelsLength) {
      mainBoard.innerHTML = '';
      mainBoard.style.width = recoverSize.width;
      mainBoard.style.height = recoverSize.height;
      const newPixelsDiv = recoverSize.pixels;
      addPixels(newPixelsDiv);
      recoverDraw();
      addEventToBoard();
    }
  }
}
recoverBoardSize();
// const removeColor = (e) => {
//   e.preventDefault();
//   e.target.style.backgroundColor = defaultbg;
//   if (e.target.classList.contains('painted')) {
//     e.target.classList.remove('painted');
//   }
// };

// divPixelsBoard.addEventListener('contextmenu', removeColor);
