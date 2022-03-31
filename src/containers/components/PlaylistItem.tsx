import { useState } from 'react';
import { liked, noliked } from '../../assets/img/buttons'

type TrackProps = {
  title: string;
  like: boolean;
  albumName: string;
  cover: string;
}

const PlaylistItens = ({ title, like, cover, albumName }: TrackProps) => {
  const [isLiked, setIsLiked] = useState(like);

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="musica__container">
      <div className="musica__conteudo">
        <img src={cover} alt={title} className="musica__cover" />
        <div className="musica__nome">
          <h4>{title}</h4>&nbsp;-&nbsp;<h6>{albumName}</h6>
        </div>
        <button onClick={() => handleLike()} className="botao__like">
          <img src={isLiked ? liked : noliked} alt="Like" className="like" />
        </button>
      </div>
    </div>
  );

};

export default PlaylistItens;