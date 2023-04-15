// Exercicio 1 - Adicione à página o título "Paleta de Cores";

// Exercicio 2 - Adicinando uma paleta de cores contendo quatro cores distintas;
const firstSection = document.createElement('section');
document.getElementsByTagName('main')[0].appendChild(firstSection);

const colorsDiv = document.createElement('div');
colorsDiv.id = 'color-palette';
firstSection.appendChild(colorsDiv);

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
// Exercicio 5 - Implenete uma função usando localStorage para que a paleta de cores
// gerada aleatoriamente seja mantida após recarregar a página

// Exercicio 6 - Adicione à página um quadro contendo 25 pixels
const sectionTwo = document.createElement('section');
document.getElementsByTagName('main')[0].appendChild(sectionTwo);

const divPixelsBoard = document.createElement('div');
divPixelsBoard.id = 'pixel-board';
sectionTwo.appendChild(divPixelsBoard);

for (let index = 0; index < 25; index += 1) { // criando 25 divs pra representar os pixels
  const createPixelsBlock = document.createElement('div');
  createPixelsBlock.className = 'pixel';
  divPixelsBoard.appendChild(createPixelsBlock);
}

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

const applyColor = (e) => {
  e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
};

const pixels = Array.from(document.querySelectorAll('.pixel'));
pixels.forEach((element) => {
  element.addEventListener('click', applyColor);
});

// Exercicio 11 - Crie um botão que retorne a cor do quadro para a cor inicial;
const resetBtn = document.createElement('button');
resetBtn.id = 'clear-board';
resetBtn.innerText = 'Limpar';
document.querySelector('#color-palette').parentNode.appendChild(resetBtn);

resetBtn.addEventListener('click', () => {
  document.querySelectorAll('.pixel').forEach((e) => {
    e.style.backgroundColor = 'white';
  });
});

// Exercicio 12 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage;
// const pixelsStorage = [];

// const savePixels = () => {
//   const arrPixelDiv = Array.from(document.getElementsByClassName('pixel'));
//   arrPixelDiv.forEach((p) => {
//     if (p.style.backgroundColor !== 'white' || p.style.backgroundColor !== 'rgb(255,255,255)') {
//       pixelsStorage.push(p.style.backgroundColor);
//     }
//     localStorage.setItem('pixelBoard', JSON.stringify(pixelsStorage));
//   });
// };
// savePixels();

// Exercicio 13 - Crie um input que permita à pessoa usuária preencher um novo tamanho
// para o quadro de pixels

// Exercicio 14 - Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels

// Exercicio 15 - Crie uma função pra manter o tamanho do board ao recarregar a pagina;

const inputSize = document.createElement('div');
inputSize.id = 'input';
document.querySelector('#color-palette').parentNode.parentNode.appendChild(inputSize);

const addInput = document.createElement('input');
addInput.id = 'board-size';
firstSection.appendChild(addInput);