import {useContext} from "react";
import { TemaProvedor } from '../contexts/temaContexto' ;

export default function Header(){
    const {tema, mudarTema} = userContext(TemaProvedor);

    return(
        <header className={`header-${tema}`}>
            <h1>Meu primeiro site com Tema de contexto</h1>
            <button onClick={mudarTema}>
                Mudar tema para{tema === 'light' ? 'escuro' : 'claro'}

            </button>
        </header>
    )
}