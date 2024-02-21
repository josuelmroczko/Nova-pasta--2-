import './footer.scss'

export default function Footer({imagem}){
    return(
        <footer>
            <h1>Vamos trabalhar juntos.</h1>
            <div>
                <img src={imagem} alt="" />
                <div>
            <ul>
                <li> 
                    <span>Endereço</span>
                    <a href="https://www.google.com/maps?q=Rua+Qualquer,+123+-+Cidade+Qualquer,+SP" target="_blank">Rua Qualquer, 123 - Cidade Qualquer, SP</a>
                </li>
                <li>
                    <span>Telefone</span>
                    <a href="tel:+1234567890">(12) 3456-7890</a>
                </li>
                <li>
                    <span>E-mail</span>
                    <a href="mailto:alo@sitebacana.com.br">alo@sitebacana.com.br</a>
                </li>
            </ul>
        </div>
            </div>
        </footer>
    )
}