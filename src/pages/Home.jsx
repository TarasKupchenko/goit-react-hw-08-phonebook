import React from 'react';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <title>Home</title>
      <h1 className={css.title}>Phonebook page </h1>

      <p>Please Register or Log In</p>
    </div>
  );
};

export default Home;
