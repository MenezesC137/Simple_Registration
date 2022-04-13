import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Carlos', 21, '2'),
    new Cliente('Beatriz', 16, '3'),
    new Cliente('Isa', 18, '4')

  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
    
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
    
  }

  return (
    <div className={`
      flex h-screen
      justify-center
      items-center
      bg-gradient-to-r
      from-purple-700
      to-blue-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao className="mb-5">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={clienteExcluido}
        />        
      </Layout>
    </div>
  )
}
