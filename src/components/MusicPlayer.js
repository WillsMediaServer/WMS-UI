import React from 'react';


class MusicPlayer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <section className="player player-music">
          <span className="player-music-cover"></span>
          <section className="player-music-details">
            <span className="song-name">Unknown Song</span>
            <span className="song-artist">Unknown Artist</span>
          </section>
          <section className="player-controls">
            <section className="player-buttons">
              <button className="player-button shuffle"></button>
              <button className="player-button prev"></button>
              <button className="player-button play"></button>
              <button className="player-button next"></button>
              <button className="player-button repeat"></button>
            </section>
            <section className="player-timeline">
              <span>00:00</span>
              <progress value="0"  max="1"/>
              <span>00:00</span>
            </section>
          </section>
        </section>
      </React.Fragment>
    )
  }
}

export default MusicPlayer;
