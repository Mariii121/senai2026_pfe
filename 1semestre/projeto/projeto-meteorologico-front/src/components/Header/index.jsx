export default function Header(){
    return(
        <header>
            <h2>Estação Meteorologica</h2>
            <nav>
                <ul>
                    <li>
                        <link to='/dashboard'>Home</link>
                    </li>
                </ul>
                <li>
                        <link to='/cadastro'>Cadastro</link>
                    </li>
                    <li>
                        <link to='/relatorio'>Reltório</link>
                    </li>
                     <li>
                        <link to='/login'>Login</link>
                    </li>
            
            </nav>
        </header>
    )
}