import React from 'react';
import css from './Gallery.module.css';

export default function Gallery() {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'X-API-Key':
  //       'CgqOeE1mM4T7VE2ZXjq7DBbGh1CmwnFPWGPa0LuOsojQjigsMtBbbC8QSqthpX98',
  //   },
  // };
  // fetch('https://deep-index.moralis.io/api/v2/block/1000?chain=eth', options)
  //   .then(response => response.json())
  //   .then(response => printResult(response))
  //   .catch(err => console.error(err));

  // const printResult = response => {
  //   const container = document.getElementById('result');
  //   container.innerHTML =
  //     '<pre>' + JSON.stringify(response, null, 2) + '</pre>';
  // };

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

        {/* <h1>Gallery</h1> */}
        {/* <div id="result"></div> */}
        {/* <script src="./test.js"></script> */}

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
