import './App.css'

function App() {

  function cadastrar() {
    console.log('Cadastrando usuário...')
  }

  return (
    <div className='app'>
      <h1>Cadastro de Usuários</h1>

      <form action="" className="form-cadastro">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="number" placeholder="Idade" />

        <button type="submit" onClick={cadastrar}>Cadastrar</button>
      </form>

      <div className="lista-usuarios">
        <h2>Lista de Usuários</h2>
        <ul>
          <li>Leonardo - leonardo@gmail.com - 25 anos</li>
        </ul>

      </div>

    </div>
  )
}

export default App
