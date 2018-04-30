import React from 'react';
import PageTitle from '../../components/PageTitle';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import Heading from '../../components/Heading'
import Button from '../../components/Button';

const Home = () => (
  <React.Fragment>
    <PageTitle title="Home" />
    <Navigation />
    <header className="section header">
      <Title content="Wills Media Server"/>
    </header>
    <section className="section account">
      <Heading text="Account"/>
      <Button to="/login" text="Login" type="info" />
      <Button to="/register" text="Register" type="success" />
    </section>
  </React.Fragment>
);

export default Home;
