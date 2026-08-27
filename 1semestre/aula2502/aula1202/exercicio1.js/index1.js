const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const divImage = document.querySelector('#div-imagem');

corpo.style.backgroundColor = '#4f06f9';
corpo.style.color = 'white';
titulo.textContent = 'Exercicio 1 de manipulando o Dom';
container.style.width = '94%';
container.style.margin = '0 auto'; //centralizando
container.style.backgroundColor = '#f09ded';

let tituloUc = '<h2>Programacao FrontEnd</h2>';
container.innerHTML += tituloUc;

let imagem = '<img src="./img/cidade-tech.jpg" alt"">';
divImage.innerHTML += ImageBitmapRenderingContext;