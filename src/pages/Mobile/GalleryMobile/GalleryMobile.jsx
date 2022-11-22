import React from 'react';
import css from './GalleryMobile.module.css';

export default function GalleryMobile() {
  return (
    <div>
      <div>
        <div className={css.gallery}>
          <button type="button" className={css.btnGalleryItem}>
            Items
          </button>
          <button type="button" className={css.btnGalleryItem}>
            Activity
          </button>
        </div>

        <ul className={css.list}>
          <li></li>
        </ul>
        <h3 className={css.title}>You’ve seen the all collection</h3>
        <div className={css.btnGalleryWrap}>
          <button type="button" className={css.btnGallery}>
            Gallery
          </button>
          <button type="button" className={css.btnGallery}>
            Got Back To Top
          </button>
        </div>
      </div>
    </div>
  );
}
