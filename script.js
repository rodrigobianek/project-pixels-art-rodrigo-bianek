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

// const saveState = () => {
//   const lastStatus = {
//     firstColor: document.querySelector('#black').style.backgroundColor,
//     secondColor: document.querySelector('#blue').style.backgroundColor,
//     thirdColor: document.querySelector('#green').style.backgroundColor,
//     fourthColor: document.querySelector('#red').style.backgroundColor,
//   };
//   const stringStatus = JSON.stringify(lastStatus);
//   localStorage.setItem('LAST_STATUS', stringStatus);
// };

btnRandom.addEventListener('click', () => {
  const classColor = document.querySelectorAll('.color');
  for (let index = 1; index < classColor.length; index += 1) {
    classColor[index].style.backgroundColor = `rgb(${randomRgb(0, 255)},
    ${randomRgb(0, 255)},
    ${randomRgb(0, 255)}`;
  }
  // saveState();
});
// Exercicio 5 - Implenete uma função usando localStorage para que a paleta de cores
// gerada aleatoriamente seja mantida após recarregar a página

// const loadState = () => {
//   const lastStatus = JSON.parse(localStorage.getItem('LAST_STATUS'));
//   document.querySelector('#black').style.backgroundColor = lastStatus.firstColor;
//   document.querySelector('#blue').style.backgroundColor = lastStatus.secondColor;
//   document.querySelector('#green').style.backgroundColor = lastStatus.thirdColor;
//   document.querySelector('#red').style.backgroundColor = lastStatus.fourthColor;
// };
// loadState();

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

// 10 - Crie uma função que permita preencher um pixel do quadro com a
// cor selecionada na paleta de cores
