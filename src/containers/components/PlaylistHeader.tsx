import playlistCover from '../../assets/img/cover/playlist.jpg';

type HeaderProps = {
  title: string;
  subtitle: string;
};

const PlaylistHeader = ({ title, subtitle }: HeaderProps) => {

  return (
    <div className="cabecalho__container">
      <div className="cabecalho__background" />
      <div className="cabecalho__conteudo">
        <img src={playlistCover} alt="Capa da playlist" className="cabecalho__cover" />
        <div className="info">
          <h3>{title}</h3>
          <h6>{subtitle}</h6>
        </div>
      </div>
    </div>
  );

};

export default PlaylistHeader;