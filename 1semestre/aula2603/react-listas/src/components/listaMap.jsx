const estudantes = [
    {id: 1, nome: 'Mariana', ra: 123444, idade: 17},
    {id: 2, nome: 'Ellefer', ra: 123445, idade: 17},
    {id: 3, nome: 'Lucas', ra: 123446, idade: 17},
    {id: 4, nome: 'Luiz', ra: 123447, idade: 17},
    {id:  5, nome: 'Isabella', ra: 123448, idade: 17},
]

export default function listaMap({titulo}){
    const litaEstudantes = estudantes.map((estudante) =>{
        return <li>
            <h3>{estudante.nome}</h3>
            <p>{estudante.ra}</p>
            <p>{estudante.idade}</p>
        </li>
    })
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            {litaEstudantes}
        </ul>
        </>

    )
}