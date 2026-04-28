import './App.css'
import { useState } from 'react'
import ListaUsuarios from './components/ListaUsuarios';

function App() {
  // Variáveis de estado para armazenar os dados do formulário e a lista de usuários
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [idade, setIdade] = useState();
  const [usuarios, setUsuarios] = useState([]);

  function handleSubmit(event) {
    event.preventDefault(); // Evita que a página seja recarregada ao enviar o formulário

    if (!nome || !email || !idade) { // Verifica se algum dos campos está vazio
      alert('Preencha todos os campos!');
      return;
    }

    // Objeto - se nome, email e idade tiverem o mesmo nome, podemos usar a sintaxe curta para criar o objeto
    const usuario = {
      id: Date.now(), // Gera um ID único para cada usuário usando a data atual
      nome,
      email,
      idade
    }
    // Adiciona o novo usuário à lista de usuários mantendo os usuários anteriores
    setUsuarios([...usuarios, usuario]);

    setNome(''); // Limpa os campos do formulário após o envio
    setEmail('');
    setIdade('');
  }

  return (
    <div className='app'>
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={nome} onChange={event => setNome(event.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
        <input type="number" placeholder="Idade" value={idade} onChange={event => setIdade(event.target.value)} />

        <button type="submit" >Cadastrar</button>
      </form>

      <div className="lista-usuarios">

        {/* Renderiza a lista de usuários cadastrados usando o componente ListaUsuarios para cada usuário */}
        {usuarios.map((usuario) => (
          <ListaUsuarios key={usuario.id} usuario={usuario} />
        ))}


      </div>

    </div>
  )
}

export default App
