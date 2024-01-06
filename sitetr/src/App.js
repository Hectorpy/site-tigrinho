import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './App.css';
import './styles.scss';
import imagePath from './tigerfundo.png';
import imagePath1 from './dep1.jpg';
import imagePath2 from './dep2.jpg';
import imagePath3 from './dep3.jpg';
import imagePath4 from './dep4.jpg';
import imagePath5 from './dep5.jpg';
import imagePath6 from './dep6.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (index) => setActiveIndex(index),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className={`dot ${activeIndex === index ? 'active' : ''}`}
      ></div>
    ));
  };

  const linkBotao1 = 'https://www.google.com'; // Link para o primeiro botão
  const linkBotao2 = 'https://www.google.com'; // Link para o segundo botão

  const novoBotaoStyle = {
    backgroundColor: '#00BE5C',
    color: 'white',
    fontSize: '20px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '20px',
    animation: 'pulse 1.5s infinite',
  };

  return (
    <div className="App">
      <div className="Header">
        <p className="Header-text">Últimas <strong>07 vagas</strong> disponíveis!</p>
      </div>
      <div className="Gradient">
        <img src={imagePath} alt="Imagem" className="Image" />
        <p className="Content-text">
          Faça de <strong>50,00 a 500,00 todos os dias</strong> <br /> com os melhores horários pagantes <br /> da <strong>plataforma nova!</strong>
        </p>
        <a href={linkBotao1} target="_blank" rel="noopener noreferrer">
          <button style={novoBotaoStyle} className="Button">ACESSAR O GRUPO GRATUITO</button>
        </a>
      </div>
      <div className="AdditionalArea">
        <p className="AdditionalArea-text">A PLATAFORMA QUE <br /> MAIS PAGA NO MOMENTO!</p>

        <div className="CarouselContainer">
          <Slider
            {...sliderSettings}
            ref={sliderRef}
            afterChange={(index) => setActiveIndex(index)}
          >
            <div>
              <img src={imagePath1} alt="Imagem 1" className="CarouselImage" />
            </div>
            <div>
              <img src={imagePath2} alt="Imagem 2" className="CarouselImage" />
            </div>
            <div>
              <img src={imagePath3} alt="Imagem 3" className="CarouselImage" />
            </div>
            <div>
              <img src={imagePath4} alt="Imagem 4" className="CarouselImage" />
            </div>
            <div>
              <img src={imagePath5} alt="Imagem 5" className="CarouselImage" />
            </div>
            <div>
              <img src={imagePath6} alt="Imagem 6" className="CarouselImage" />
            </div>
          </Slider>
        </div>
        <div className="DotsContainer">{renderDots()}</div>
          <a href={linkBotao2} target="_blank" rel="noopener noreferrer">
          <button style={novoBotaoStyle} className="Button2">ACESSAR O GRUPO GRATUITO</button>
        </a>
      </div>
      <div className="Footer">
        <p>Termos de Uso | Política de Privacidade</p>
      </div>
    </div>
  );
}

export default App;
