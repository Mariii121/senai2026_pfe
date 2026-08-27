import imgMusculacao from 'https://www.unimedcampinas.com.br/blog/viver-com-saude/entenda-a-importancia-da-musculacao-e-como-comecar';
import imgCardio from 'https://www.oceandrop.com.br/blog/beneficios-do-cardio?srsltid=AfmBOopbfdLaA5pfwyo-4p1P0BB0eohdA_N4FjOs2yVJGra7TV488dd9';
import imgYoga from 'https://totalpass.com/br/blog/bem-estar/hot-yoga-o-que-e/';

export default function Main(){
    return(
        <main>
            <section id="home">
                <h2>Transforme seu corpo com a<span>Fofitness</span></h2>
                <p>A academia perfeita para quem deseja saúde, diversão e um shape incrível</p>
                <button>Começar Agora</button>
            </section>

            <section id="sobre">
                <h2>Somos uma academia focada em perda de peso com saúde, bem-estar e sem dietas mirabolantes. Nosso lema é "Vem para cá e afine igual um palitinho".</h2>
            </section>

            <section id="modalidades">
                <h2>Modalidades</h2>
                <div className="exercicio">
                    <h3>Musculação</h3>
                    <img src="(imgMusculacao)" alt=""/>
                </div>
                <div className="exercicio">
                    <h3>Cardio</h3>
                    <img src="(imgCardio)" alt=""/>
                </div>
                <div className="exercicio">
                    <h3>Yoga</h3>
                    <img src="(imgYoga)" alt=""/>
                </div>

            </section>

            <section id="planos">
                <h2>Planos e Preços</h2>
                <div className="tabela-planos">
                    <h3>Básico</h3>
                    <p className="preço">R$ 79,99/mês</p>
                    <ul>
                        <li>Acesso à musculação</li>
                        <li>Aulas coletivas limitadas</li>
                        <li>Horário livre</li>
                    </ul>
                </div>
                <div className="tabela destaque">
                    <h3>Premium</h3>
                    <p className="preço">R$ 129,99/mês</p>
                    <ul>
                        <li>Acesso total</li>
                        <li>Personal Treiner</li>
                        <li>Yoga e Funcional</li>
                    </ul>
                </div>
                <div className="Planos">
                    <h3>Vip</h3>
                    <p className="preço">R$ 199,99/mês</p>
                    <ul>
                        <li>Personal exclusvo</li>
                        <li>Nutricionista</li>
                        <li>Acompanhamento mensal</li>
                        <li>Bom dia da(o) atendente</li>
                    </ul>
                </div>
            </section>

            <section id="depoimentos">
                <h2>O que nossos alunos dizem</h2>
                <div className="depoimento">
                    <p>"A melhos academia de Mirandópolis, ambiente confortavél, climatizado e acessível."</p>
                    <span>Mariana de Sousa</span>
                </div>
                <div className="depoimento">
                    <p>"Peofessores atenciosos, estrutura impecável e o melhor, tem ar condicionado!"</p>
                    <span>Gaby</span>
                </div>
           </section>

           <section id="contato" className="contato">
            <h2>Entre em contato</h2>
            <form action="">
                <input type="text" placeholder="Seu nome"/>
                <input type="text" placeholder="Seu e-mail"/>
                <textarea name="" id="" placeholder="Mensagem">

                </textarea>
            </form>

           </section>
        </main>
    )
}