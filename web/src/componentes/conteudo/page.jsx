import React from 'react';
import './conteudo.scss';

export default function Conteudo({ video, imagem }) {
  const videoAtivo = video ? 'videoAtivo' : '';

  return (
    <section className={`conteudoContainer ${videoAtivo}`}>
      {video && <video src={video} autoPlay loop muted />}  
      {imagem && <img src={imagem} />}
      <div>
        <h1>Perfil da Empresa</h1>
        <p>
          Fundada em 1992, a Dante Contabilidade é uma empresa de serviços completos,
          oferecendo soluções acessíveis em contabilidade para pessoas e negócios locais e internacionais.
        </p>
        <button ><a href="#"> Saiba Mais ᐳ </a></button>
      </div>
    </section>
  );
}
