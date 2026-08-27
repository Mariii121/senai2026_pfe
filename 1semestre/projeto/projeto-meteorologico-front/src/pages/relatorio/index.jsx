import Header from '../../components/header'

export default function Relatorio(){
    const leituras = [
        {horario: "12:00", qualidadeAr: "Boa", iqa: 42, temperatura: 26, umidade: "68%"},
         {horario: "11:00", qualidadeAr: "Boa", iqa: 55, temperatura: 20, umidade: "50%"},
          {horario: "10:00", qualidadeAr: "Boa", iqa: 60, temperatura: 39, umidade: "30%"},
    ]

    return(
        <div className="container">
            <Header />
            <h3>relatorio estação metropologica</h3>
            <p>monitoramento da temperatura e umidade em tempo real</p>

            <section className="graficos"> {/* colocar grafico*/} </section>
            <section className="tabela-leituras">
                <table>
                    <thead>
                        <tr>
                            <th>horario</th>
                             <th>quelidade</th>
                              <th>iqa</th>
                               <th>temperatura</th>
                                <th>umidade</th>
                        </tr>
                    </thead>
                </table>
            </section>

        </div>
    )
            }