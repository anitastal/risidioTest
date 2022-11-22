import React from 'react';
import logo1 from '../../../assets/img/logo/logo.png';
import logo2 from '../../../assets/img/logo/logo@2x.png';
import css from './Header.module.css';

export default function Header() {
  return (
    <div className={css.conteiner}>
      <div className={css.header}>
        <picture className={css.img}>
          <source srcSet={`${logo1} 1x, ${logo2} 2x`} />
          <img src={logo1} alt="logo" />
        </picture>
        <ul className={css.list}>
          <li>
            <a href="./Header.jsx" className={css.listItem}>
              Explore
            </a>
          </li>
          <li>
            <a href="./Header.jsx" className={css.listItem}>
              {' '}
              Featured collections
            </a>
          </li>
        </ul>
        <ul className={css.nav}>
          <li>
            <a href="./Header.jsx" className={css.navItem}>
              How It Works
            </a>
          </li>
          <li>
            <a href="./Header.jsx" className={css.navItem}>
              About Risidio
            </a>
          </li>
        </ul>
        <button type="button" className={css.btn}>
          <span className={css.btnText}>My NFT</span>
        </button>
      </div>
    </div>
  );
}
