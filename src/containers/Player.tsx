import { headerInfo, tracks } from '../services/api'
import PlaylistHeader from './components/PlaylistHeader';
import PlaylistItens from './components/PlaylistItens';

const Player = () => {
  return (
    <div className='player__container'>
      <PlaylistHeader {...headerInfo} />
      {tracks.map((track) => (
        <PlaylistItens {...track} key={track.id} />
      ))}
    </div>
  )
}

export default Player;