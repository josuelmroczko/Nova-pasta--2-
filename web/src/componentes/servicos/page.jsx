import './servicos.scss'

export default function Servicos({imagem}){
    return(
        <section className='servios'>

          <div>
             <h2>Nossos Serviços</h2>
        <img src={imagem} alt="" />
            </div>  
       
        <div className='servicosPrestados'>
            <ul>
                <li><h3><span>01 </span>Preparação Fiscal</h3><p>Preparamos tudo o que você precisa para o imposto de renda</p></li>
                <li><h3><span>02 </span>Pacote de Startup</h3><p>Criamos modelos financeiros que você pode apresentar a investidores</p></li>
                <li><h3><span>03 </span>Gestão Patrimonial</h3><p>Fornecemos serviços inteligentes de consultoria em investimentos</p></li>
            </ul>
 
        </div>


        </section>
    )
}