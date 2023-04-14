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

btnRandom.addEventListener('click', () => {
  const classColor = document.querySelectorAll('.color');
  for (let index = 1; index < classColor.length; index += 1) {
    classColor[index].classList.add('random');
    classColor[index].style.backgroundColor = `rgb(${randomRgb(0, 255)},
    ${randomRgb(0, 255)},
    ${randomRgb(0, 255)}`;
  }
});
