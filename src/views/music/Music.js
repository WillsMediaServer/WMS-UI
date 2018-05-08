import React from 'react';
import PageTitle from '../../components/PageTitle';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import Songs from '../../components/API/Music/Songs';

class Music extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <PageTitle title="Music" />
        <Navigation />
        <header className="section header">
          <Title content="Music"/>
        </header>
        <Songs />
      </React.Fragment>
    )
  }
}

export default Music;
