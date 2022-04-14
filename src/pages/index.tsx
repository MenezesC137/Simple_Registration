import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Carlos', 21, '2'),
    new Cliente('Beatriz', 16, '3'),
    new Cliente('Isa', 18, '4')

  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')

  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);

  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
    
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente);
    setVisivel('tabela')
    
  }

  return (
    <div className={`
      flex 
      justify-center
      items-center
      h-screen
      bg-gradient-to-r
      from-purple-700
      to-blue-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao  
              className="
                mb-5 
                bg-gradient-to-r from-green-500 to-green-700" 
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}
