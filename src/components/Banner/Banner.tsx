import React from "react";
import banner from '../../assets/images/banner.jpg';
import tituloHistoria from '../../assets/images/os6.png'
import './Banner.css'

const Banner: React.FC = () => {
    return(
        <div className="banner">
            <div className="historia-Titulo">
                <img src={tituloHistoria} alt="Titulo" className="titulo-historia"></img>
                <div className='NossaHistoria'>
                <p className='pNH'>Em 17 de junho de 2024, um sonho se tornou realidade: iniciamos o processo de formação da ModalGR como estagiarios.</p>
                <p className='pNH'>
                Dentre os 244 inscritos, apenas 15 foram selecionados. Esse grupo seleto, conhecido como "Os 6%", representa a porcentagem dos profissionais contratados em suas áreas de atuação: UI/UX, desenvolvimento fullstack, garantia da qualidade (QA) e infraestrutura. Mais do que habilidades técnicas impecáveis, "Os 6%" se destacam pela paixão pelo que fazem e pela sinergia com a cultura e os valores da ModalGR.</p>
                <p className='pNH'>
                Desde o início, a união e o entusiasmo do grupo foram contagiantes. Juntos, formamos um time coeso e pronto para enfrentar os desafios que estão por vir. Cada um de nós está ansioso para contribuir para o crescimento da empresa e fazer a diferença no mercado.</p>
                <p className='pNH'>
                Somos "Os 6%", e juntos, somos a força que impulsiona a inovação. #Pracima</p>
                </div>
            </div>
            <img  src={banner} alt="Banner" className="banner-image"></img>
        </div>
    )
}

export default Banner;