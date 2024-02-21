import './clientes.scss'

export default function Cliente({ cliente1, cliente2, cliente3 }) {
    return (
        <section className='containerclente'>
            <h2>Nossos clientes</h2>
            <p>Desde o começo, prestamos serviços de confiança a nossos clientes.
                Tivemos a honra de sermos a primeira empresa na escolha das seguintes corporações:</p>

            <div className='clientes'>
                <ul>
                    <li>
                        <div className="cliente-info">
                            <img src={cliente1} alt="cliente1" />
                            <p>Banco Belden Ltda.</p>
                        </div>
                    </li>
                    <li>
                        <div className="cliente-info">
                            <img src={cliente2} alt="cliente2" />
                            <p>Miranda Digital</p>
                        </div>
                    </li>
                    <li>
                        <div className="cliente-info">
                            <img src={cliente3} alt="cliente3" />
                            <p>Pereira Valores Mobiliários</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
