function MeuAvatar({ nome, idade, foto, estilo, disciplina }) {
  return (
    <div>
      <img src={foto} alt="Foto de perfil" width="150" />

      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Estilo musical: {estilo}</p>
      <p>Disciplina favorita: {disciplina}</p>
    </div>
  )
}

export default MeuAvatar