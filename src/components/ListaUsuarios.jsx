import './ListaUsuarios.css'

function ListaUsuarios({ usuario }) {
  return (
    
    <div className="usuario">
      <p>Nome: {usuario.nome}</p>
      <p>Email: {usuario.email}</p>
      <p>Idade: {usuario.idade}</p>

    </div>
  )
}

export default ListaUsuarios