import { headerInfo, tracks } from '../services/api'
import PlaylistHeader from './components/PlaylistHeader';

const Player = () => {
  return (
    <div className='player__container'>
      <PlaylistHeader {...headerInfo} />
      {/*tracks.map(track) => (
          <PlaylistItens {...track} />
        ))*/}

    </div>
  )
}

export default Player;