// import DescktopPage from 'pages/Descktop/DescktopPage';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      
      <h1 className={css.title}>Front End Dev Assignement</h1>
      <h2 className={css.titleText}>The Design</h2>
      <p className={css.text}>
        We give you here access to the Design for the page you need to create.
        You can find all the assets (Images, colles and more) on the dev tap on
        the right menu). You have access to a Desktop and a Mobile design but of
        course your design must be responsive and work on every screen sise.
      </p>

      <div className={css.linkList}>
        <NavLink to="/risidio-test/descktop" className={css.link}>
          Descktop
        </NavLink>
        <NavLink to="/risidio-test/mobile" className={css.link}>
          Mobile
        </NavLink>
       
      </div>
    </div>
  );
}
