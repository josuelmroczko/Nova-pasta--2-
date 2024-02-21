import './topo.scss';

const Topo = ({ imagem ,nome}) => {
  return (
    <section>
      <div className='containerTopo'>
        <div className='apresentacao'>
          <h1>{nome}</h1>
          <p>Experiência. Compromisso. Valor.</p>
        </div>
     
        <img src={imagem} alt="" />

      </div>
    </section>
  );
};

export default Topo;
