import { Link } from "react-router-dom";

function Formulario() {
  return (
    <section>
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          placeholder="Nome Completo"
        />

        <label htmlFor="endereco">Endereço</label>
        <input
          type="text"
          id="endereco"
          placeholder="Endereço"
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email"
        />

        <label htmlFor="celular">Celular</label>
        <input
          type="text"
          id="celular"
          placeholder="(00)00000-0000"
        />

        <label htmlFor="documento">Documento</label>
        <input
          type="text"
          id="documento"
          placeholder="000.000.000-00"
        />

        <button type="submit">Salvar</button>

        <ul className="dropdown-menu">
          <li>
            <Link
              to="/cadastro"
              className="nav-link text-secondary link-cadastro"
            >
              Cadastro 1
            </Link>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Cadastro 2
            </a>
          </li>

          <li>
            <Link className="dropdown-item" to="/">
              Cadastro 3
            </Link>
          </li>
        </ul>
      </form>
    </section>
  );
}

export default Formulario;