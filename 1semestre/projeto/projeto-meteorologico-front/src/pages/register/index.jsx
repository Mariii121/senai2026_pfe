import { useState } from "react";
import { Link } from "react-router-dom";
import imgEstacao from '../../assets/estacao.jpg'//opcional

export default function login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [ConfirmaSenha, setConfirmaSenha] = useState('');

    return(
        <section>
            <div>
                <img src={imgEstacao} alt="" />
            </div>
            <div>
                <h2>Login</h2>
                <form action="">
                    <inout type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                </form>
            </div>

        </section>
    )
}