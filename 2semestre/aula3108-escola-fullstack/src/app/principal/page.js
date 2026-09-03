import Header from "../components/header";

export default function Principal() {
    return (
        <>
            <Header />

            <main className="main">

                <section className="hero">
                    <div className="hero-text">
                        <span className="tag">SISTEMA ESCOLAR</span>

                        <h2>
                            Bem-vindo ao
                            <strong> Projeto Escola</strong>
                        </h2>

                        <p>
                            Gerencie alunos, notas e informações acadêmicas
                            de forma simples, rápida e organizada.
                        </p>

                        <div className="hero-buttons">
                            <a href="/cadaluno" className="button primary">
                                Cadastrar aluno
                            </a>

                            <a href="/listaluno" className="button secondary">
                                Ver alunos
                            </a>
                        </div>
                    </div>

                    <div className="hero-card">
                        <div className="school-icon">
                            🎓
                        </div>

                        <h3>SESI Mirandópolis</h3>

                        <p>
                            Sistema de gerenciamento escolar
                        </p>

                        <div className="mini-info">
                            <div>
                                <span>📚</span>
                                <p>Alunos</p>
                            </div>

                            <div>
                                <span>📝</span>
                                <p>Notas</p>
                            </div>

                            <div>
                                <span>📊</span>
                                <p>Controle</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-title">
                    <span>ACESSO RÁPIDO</span>
                    <h2>O que você deseja fazer?</h2>
                    <p>
                        Escolha uma das opções abaixo para acessar o sistema.
                    </p>
                </section>


                <section className="cards">

                    <a href="/cadaluno" className="card">
                        <div className="card-icon">👨‍🎓</div>
                        <h3>Cadastrar aluno</h3>
                        <p>
                            Adicione novos alunos ao sistema escolar.
                        </p>
                        <span className="card-link">
                            Acessar →
                        </span>
                    </a>


                    <a href="/listaluno" className="card">
                        <div className="card-icon">📋</div>
                        <h3>Lista de alunos</h3>
                        <p>
                            Consulte os alunos cadastrados no sistema.
                        </p>
                        <span className="card-link">
                            Acessar →
                        </span>
                    </a>


                    <a href="/notaluno" className="card">
                        <div className="card-icon">📝</div>
                        <h3>Cadastrar notas</h3>
                        <p>
                            Registre e atualize as notas dos alunos.
                        </p>
                        <span className="card-link">
                            Acessar →
                        </span>
                    </a>


                    <a href="/listnota" className="card">
                        <div className="card-icon">📊</div>
                        <h3>Lista de notas</h3>
                        <p>
                            Visualize as notas e o desempenho dos alunos.
                        </p>
                        <span className="card-link">
                            Acessar →
                        </span>
                    </a>

                </section>


                <section className="about">
                    <div>
                        <span className="tag">PROJETO ESCOLAR</span>

                        <h2>
                            Tecnologia para facilitar a
                            <strong> gestão escolar</strong>
                        </h2>

                        <p>
                            O Projeto Escola foi desenvolvido para facilitar
                            o gerenciamento de alunos e suas informações
                            acadêmicas, tornando o processo mais organizado
                            e eficiente.
                        </p>
                    </div>

                    <div className="about-number">
                        <strong>SESI</strong>
                        <span>Mirandópolis</span>
                    </div>
                </section>

            </main>

            <footer className="footer">
                <p>
                    © 2026 Projeto Escola — SESI Mirandópolis
                </p>
            </footer>
        </>
    );
}