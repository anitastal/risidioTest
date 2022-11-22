import React from 'react';
import css from './FooterMobile.module.css';
import logo from '../../../assets/img/logoFooter/logoFooter.png';
import logo2 from '../../../assets/img/logoFooter/logoFooter@2x.png';
import { FiYoutube, FiInstagram, FiTwitter } from 'react-icons/fi';
import { BsDiscord } from 'react-icons/bs';

export default function FooterMobile() {
  return (
    <div className={css.conteiner}>
      <div className={css.about}>
        <picture className={css.img}>
          <source srcSet={`${logo} 1x, ${logo2} 2x`} />
          <img src={logo} alt="logo" />
        </picture>

        <p className={css.text}>
          Risidio Marketplace is the platform for digital assets registered via
          the Bitcoin blockchain using Clarity Contracts and the Stacks 2.0
          network. We are looking for partners and clients to help get the
          platform to the next level.
        </p>
        <ul className={css.list}>
          <li className={css.listItem}>
            <FiInstagram />
          </li>
          <li>
            <FiTwitter />
          </li>
          <li>
            <BsDiscord />
          </li>
          <li>
            <FiYoutube />
          </li>
        </ul>
      </div>
    </div>
  );
}
