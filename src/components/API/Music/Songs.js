import React, { Component } from 'react';
import Song from '../../Song';

const API = window.location.protocol + "//" + window.location.hostname + "/api/v1/music/songs/?limit=1000";

class Songs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      isLoading: false,
      error: null,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ songs: data.result, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render() {
    const { songs, isLoading, error } = this.state;

    if (error) {
      return <p>{ error.message }</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (<section className="music-container">
      {songs.map(song => <Song key={song.id} song={song}></Song>)}
    </section>);
  }
}

export default Songs;
