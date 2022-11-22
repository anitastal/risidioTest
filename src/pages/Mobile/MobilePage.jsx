import React from 'react';
import FooterMobile from './Footer/FooteMobile';
import GalleryMobile from './GalleryMobile/GalleryMobile';
import HeaderMobile from './HeaderMobile/HeaderMobile';

import css from './Mobile.module.css';

export default function MobilePage() {
  return (
    <div className={css.conteiner}>
      <HeaderMobile />
      <GalleryMobile />
      <FooterMobile />
    </div>
  );
}
