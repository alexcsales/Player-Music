import { useState } from 'react';

import cover from '../assets/img/cover/Matanza.jpg'

import { prev, play, pause, stop, next } from '../assets/img/buttons'

import ControlButton from './components/ControlButton';

const Controls = () => {

  const [isPaused, setIsPaused] = useState(false);

  const handlePlay = () => {
    setIsPaused(!isPaused)
  }
  return (
    <div className="controle__container">
      <img src={cover} alt="Capa do álbum" className="controle__imagem" />
      <div className="botoes__container">
        <ControlButton>
          <img src={prev} alt="voltar" className="botao__icone" />
        </ControlButton>
        <ControlButton>
          <img src={stop} alt="parar" className="botao__icone" />
        </ControlButton>
        <ControlButton>
          <img src={isPaused ? pause : play} alt="play/paused" className="botao__icone" onClick={() => handlePlay()} />
        </ControlButton>
        <ControlButton>
          <img src={next} alt="proximo" className="botao__icone" />
        </ControlButton>
      </div>
    </div>
  );
};

export default Controls;