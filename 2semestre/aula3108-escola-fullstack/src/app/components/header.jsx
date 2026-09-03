import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <span>🎓</span>
                <div>
                    <h1>Projeto Escola</h1>
                    <p>SESI Mirandópolis</p>
                </div>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href="/principal">Início</Link>
                    </li>

                    <li>
                        <Link href="/cadaluno">Cadastrar Aluno</Link>
                    </li>

                    <li>
                        <Link href="/listaluno">Lista de Alunos</Link>
                    </li>

                    <li>
                        <Link href="/notaluno">Cadastrar Notas</Link>
                    </li>

                    <li>
                        <Link href="/listnota">Lista de Notas</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}