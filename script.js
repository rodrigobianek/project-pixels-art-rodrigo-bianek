// Ex1 - Adicione à página o título "Paleta de Cores";

// Ex2 - Adicinando uma paleta de cores contendo quatro cores distintas;
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

createDiv('black');
createDiv('blue');
createDiv('green');
createDiv('red');
