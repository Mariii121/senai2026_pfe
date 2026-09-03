'use client';
import Header from "../components/header";

export default function ListAluno() {
    // Dados de exemplo
    const aluno = {
        nome: "Mariana",
        t1: 8.0,
        t2: 9.0,
        n1: 7.0,
        n2: 8.0,
        n3: 9.0
    };

    // Calculando a média simples
    const media = ((aluno.t1 + aluno.t2 + aluno.n1 + aluno.n2 + aluno.n3) / 5).toFixed(1);
    const status = media >= 6.0 ? "Aprovado" : "Reprovado";

    return (
        <>
            <Header />
            <h2>Lista de Alunos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>T1</th>
                        <th>T2</th>
                        <th>N1</th>
                        <th>N2</th>
                        <th>N3</th>
                        <th>Média</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{aluno.nome}</td>
                        <td>{aluno.t1}</td>
                        <td>{aluno.t2}</td>
                        <td>{aluno.n1}</td>
                        <td>{aluno.n2}</td>
                        <td>{aluno.n3}</td>
                        <td><strong>{media}</strong></td>
                        <td>{status}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}