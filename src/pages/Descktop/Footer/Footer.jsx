import React from 'react';
import css from './Footer.module.css';
import logo from '../../../assets/img/logoFooter/logoFooter.png';
import logo2 from '../../../assets/img/logoFooter/logoFooter@2x.png';

export default function Footer() {
  return (
    // <div className={css.wrap}>
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
      </div>
      <div className={css.listWrap}>
        <ul className={css.list}>
          <li className={css.listItem}>NFT</li>
          <li className={css.listItem}>Your Nfts</li>
          <li className={css.listItem}>Mint A File</li>
        </ul>

        <ul className={css.list}>
          <li className={css.listItem}>How it works</li>
          <li className={css.listItem}>Self Owned Indenty</li>
          <li className={css.listItem}>Getting Testnet Stc</li>
        </ul>

        <ul className={css.list}>
          <li className={css.listItem}>What we do</li>
          <li className={css.listItem}>Get In Touch</li>
          <li className={css.listItem}>Developers</li>
        </ul>
      </div>
    </div>
    // </div>
  );
}
