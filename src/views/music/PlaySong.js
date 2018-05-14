import React from 'react';
import PageTitle from '../../components/PageTitle';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';

const API = window.location.protocol + "//" + window.location.hostname + "/api/v1/music/songs/";

class PlaySong extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      song: {
        id: null,
        artist: {
          name: ""
        },
        album: {
          name: ""
        }
      },
      isLoading: false,
      error: null,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API + this.props.match.params.id)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ song: data.result, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render() {
    const { song, isLoading, error } = this.state;
    const songUrl = window.location.protocol + "//" + window.location.hostname + "/media/song/" + song.id + "?format=mp3";

    if (error) {
      return <p>{ error.message }</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <React.Fragment>
        <PageTitle title="Play" />
        <Navigation />
        <header className="section header">
          <Title content={song.name}/>
          <h3>By { song.artist.name }</h3>
          <h3>In { song.album.name }</h3>
        </header>
        <section>
          <audio controls id="player">
            { song.id != null && <source src={songUrl} id="player-source" /> }
          </audio>
        </section>
      </React.Fragment>
    )
  }
}

export default PlaySong
