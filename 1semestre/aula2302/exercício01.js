class Livro {
  // atributos
  titulo = 'O Pequeno Príncipe';
  autor = 'Antoine de Saint-Exupéry';
  ano = 1943;
  paginas = 96;
  editora = 'HarperCollins';
  idioma = 'Português';
  genero = 'Ficção';
  isbn = '978-0156012195';

  // métodos
  ler() {
    console.log('Estou lendo o livro');
  }

  mostra() {
    console.log(
      'O livro é: ' + this.titulo + ', de ' + this.autor + ', ' + this.ano +
      ', ' + this.paginas + ' páginas, editora ' + this.editora +
      ', idioma ' + this.idioma + ', gênero ' + this.genero +
      ', ISBN ' + this.isbn
    );
  }
}

// instanciando a classe
const meuLivro = new Livro();
meuLivro.ler();
meuLivro.mostra();