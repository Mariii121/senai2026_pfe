import styles from "./page.module.css";

const posts = [
  {
    id: 1,
    titulo: "A beleza e a alegria dos animais",
    categoria: "Animais",
    data: "10 de agosto de 2026",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBjrCz746Y3PbUbGtoDxoYIOfpkYdMgpN5bHxWUzqsQ&s=10",
  },
  {
    id: 2,
    titulo: "Curiosidades incríveis sobre os animais",
    categoria: "Curiosidades",
    data: "8 de agosto de 2026",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXnh9u-301dhliQ_4OHP24RedLL5Ure8X9nXj8vfVQw&s=10",
  },
  {
    id: 3,
    titulo: "Por que devemos cuidar dos animais?",
    categoria: "Cuidados",
    data: "5 de agosto de 2026",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTOMEPKIfMDtKLsQD6AUL00Vc7jaHqeDVRmBEDHEucA&s=10",
  },
  {
    id: 4,
    titulo: "Conheça o incrível mundo animal",
    categoria: "Natureza",
    data: "2 de agosto de 2026",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygZX8f_VojEuY6WsYJEIpfcL0AHTNvpqEIgLzLc0gxQ&s=10",
  },
];

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.logo}>MUNDO ANIMAL</div>

        <nav>
          <a href="#">Início</a>
          <a href="#">Animais</a>
          <a href="#">Curiosidades</a>
          <a href="#">Cuidados</a>
          <a href="#">Natureza</a>
          <a href="#">Sobre</a>
        </nav>
      </header>

      <section className={styles.banner}>
        <div>
          <p className={styles.pequeno}>BEM-VINDA AO MUNDO ANIMAL</p>

          <h1>
            Um espaço para
            <br />
            conhecer os animais.
          </h1>

          <p>
            Curiosidades, informações e conteúdos
            sobre o incrível mundo dos animais.
          </p>

          <button>CONHEÇA O BLOG</button>
        </div>
      </section>

      <section className={styles.conteudo}>
        <div className={styles.tituloSecao}>
          <p>MUNDO ANIMAL</p>
          <h2>Últimas publicações</h2>
        </div>

        <div className={styles.posts}>
          {posts.map((post) => (
            <article className={styles.post} key={post.id}>
              <img src={post.imagem} alt={post.titulo} />

              <div className={styles.postTexto}>
                <span>{post.categoria}</span>

                <h3>{post.titulo}</h3>

                <p>{post.data}</p>

                <a href="#">Leia mais →</a>
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.sobre}>
          <div>
            <p className={styles.pequeno}>SOBRE O BLOG</p>

            <h2>Um espaço para quem ama animais! ♡</h2>

            <p>
              Este blog foi criado para compartilhar
              curiosidades, informações e conteúdos sobre
              os animais, além de mostrar como podemos
              cuidar e respeitar cada espécie.
            </p>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1DXGiO52yxUgfHi_ALAJSpDTceUAiREmoxS0CDt-xg&s=10"
            alt="Animal"
          />
        </aside>
      </section>

      <footer>
        <h2>MUNDO ANIMAL</h2>

        <p>
          Animais • Curiosidades • Cuidados • Natureza
        </p>

        <p>
          © 2026 Mundo Animal. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}