const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');

corpo.style.backgroundColor = '#f99c06';
corpo.style.color = 'white';
titulo.textContent = 'Adicionando elementos via JS';
container.style.width = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#f09d9d'

let anuncio = '<h2>Curso dev com ia - novidade!!!</h2>';
container.innerHtml += anuncio;
