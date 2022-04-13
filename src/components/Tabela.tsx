import Cliente from "../core/Cliente"

interface TabelaProps {
    clientes: Cliente[]

}

export default function Tabela(props: TabelaProps) {
    
    function renderizarCabecalho() {

        return (
        
            <tr>
                <th className="text-left p-3" >Código</th>
                <th className="text-left p-3" >Nome</th>
                <th className="text-left p-3" >Idade</th>
            </tr>
           
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) =>{
            return (
                <tr key={cliente.id}
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-3">{cliente.id}</td>
                    <td className="text-left p-3">{cliente.nome}</td>
                    <td className="text-left p-3">{cliente.idade}</td>
                </tr>
            )
        })
    }
    
    return(
        <table className={`
            w-full
            rounded-xl
            overflow-hidden
        `}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r 
                from-blue-700 
                to-blue-400
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
            
        </table>
    )
}