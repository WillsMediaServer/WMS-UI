import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Song extends Component {
  render() {
    const playSongLink = "/music/song/" + this.props.song.id;
    const coverUrl = "url('" + window.location.protocol + "//" + window.location.hostname + "/media/covers/1')";
    const playBtnUrl = "url('" + window.location.protocol + "//" + window.location.hostname + "/static/img/play-button.png')";
    return (
      <section className="square">
        <article className="background" style={{ backgroundImage: coverUrl }}></article>
        <article className="details">
          <p className="song">{ this.props.song.name }</p>
          <p className="artist">{ this.props.song.artist.name }</p>
        </article>
        <article className="more">
          <a></a>
          <Link to={playSongLink} className="play-button" style={{ backgroundImage: playBtnUrl }}></Link>
        </article>
      </section>
    )
  }
}

export default Song;
