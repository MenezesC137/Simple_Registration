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
  return (
    <div className={`
      flex h-screen
      justify-center
      items-center
      bg-gradient-to-r
      from-blue-400
      to-blue-700
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>        
      </Layout>
    </div>
  )
}
