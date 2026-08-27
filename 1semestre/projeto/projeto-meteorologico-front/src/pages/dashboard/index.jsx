import Header from '../../components/Header'
import GraficoBarra from'../../components/graficoBarra'

export default function Dashboard(){
    return(
        <>
        <div className='container py-4'></div>
        <Header />
        <section>
        <div className="card">
        <h6>umidade</h6>
        <h2>80%</h2>
 </div>
 <div className="card">
        <h6>Pressão</h6>
        <h2>1013 hPa</h2>
 </div>
        <div className="card">
        <h6>vento</h6>
        <h2>12km</h2>
 </div>
 </section>

        <section className="graficos">
            <h6>Gráficos</h6>
            <div>
               {/* colocar graficos */}
            </div>
 
        </section>
        <section className="tabela">
            <h6>Leituras Recentes</h6>
            <table>
                <thead>
                    <tr>
                        <th>Horario</th>
                        <th>temp.</th>
                        <th>umidade</th>
                        <th>vento</th>
                    </tr>
                </thead>
            </table>
        </section>
        
      
        <section className="tabela">
            <h6>Leituras Recentes</h6>
            <table>
                <tbody>
                    <tr>
                        <td>12:00</td>
                        <td>45c</td>
                        <td>50%</td>
                        <td>13km</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        </>

    )
}