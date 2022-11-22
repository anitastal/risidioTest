import React, { Component } from 'react';
import logo1 from '../../../assets/img/logo/logo.png';
import logo2 from '../../../assets/img/logo/logo@2x.png';
import css from './HeaderMobile.module.css';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import MainMobile from '../MainMobile/MainMobile';

export default class HeaderMobile extends Component {
  state = {
    isOpen: false,
    hidden: true,
  };

  toggleBurger = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div className={css.conteiner}>
        <div className={css.header}>
          <picture>
            <source srcSet={`${logo1} 1x, ${logo2} 2x`} />
            <img src={logo1} alt="logo" className={css.img} />
          </picture>

          <button
            type="button"
            className={css.btnBurger}
            onClick={this.toggleBurger}
          >
            {this.state.isOpen ? <CgClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <MainMobile />
        {/* {this.state.isOpen && (
          <div>
            <ul className={css.list}>
              <li className={css.listItem}>Gallery</li>
              <li className={css.listItem}>Collections</li>
            </ul>
            <ul className={css.list}>
              <li className={css.listItem}>How it works</li>
              <li className={css.listItem}>About</li>
            </ul>
            <button type="button" className={css.btn}>
              Register with Hiro wallet
            </button>
          </div>
        )} */}
      </div>
    );
  }
}
