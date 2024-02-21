import Topo from "@/componentes/Topo/page";

 import './globals.css'
import Conteudo from "@/componentes/conteudo/page";
import Servicos from "@/componentes/servicos/page";
import Cliente from "@/componentes/clientes/page";
import ConteudoFinal from "@/componentes/conteudo2/page";
import Footer from "@/componentes/footer/page";

export default function MyComponent() {
 

  return (
    <div>
      <Topo imagem='/bannerTopo.jpg' nome='Marceline Dante'/>
      <Conteudo imagem='/bannerTopo.jpg'  /> { /*.jpg'posso alterar o vidio por image,:   imagem='/bannerTopo.jpg'   : video='/video.mp4'*/}
      <Servicos  imagem= '/servicos.jpg' />
      <Cliente cliente1='cliente1.jpg' cliente2='cliente2.jpg' cliente3='cliente3.jpg' />
      <ConteudoFinal/>
      <Footer imagem='trabalharJuntos.jpg'/>
    </div>
  );
}
