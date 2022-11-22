import React, { Component } from 'react';
import photo from '../../../assets/img/authorPhoto/girl-comp.png';
import photo2 from '../../../assets/img/authorPhoto/girl-comp@2x.png';
import css from './MainMobile.module.css';

export default class MainMobile extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  render() {
    return (
      <div>
        <div className={css.parent}>
          <div className={css.back}>
            <img src="" alt="" className={css.titleImg} />
            <h1 className={css.title}>Collection Name</h1>
          </div>

          <picture>
            <source srcSet={`${photo} 1x, ${photo2} 2x`} />
            <img src={photo} alt="logo" className={css.nameImg} />
          </picture>

          <h2 className={css.name}>Artist Name</h2>

          <div className={css.wrap}>
            <p className={css.text}>
              Description of the NFT / collectable - Examples such the content
              of NFTs, specific themes of the collection, quotations by the
              creator, the meaning behind the creation of this piece etc.
            </p>
            <button type="button" className={css.btn} onClick={this.toggle}>
              {this.state.visible ? 'Hidde' : 'Read more'}
            </button>
            {this.state.visible && (
              <div>
                <p className={css.hidenText}>
                  Description of this collection - - Examples such the content
                  of NFTs, specific themes of the collection, quotations by the
                  creator, the meaning behind the creation of this collection
                  etc Description of this collection - - Examples such the
                  content of NFTs, specific themes of the collection, quotations
                  by the creator, the meaning behind the creation of this
                  collection etcDescription of this collection - - Examples such
                  the content of NFTs, specific themes of the collection,
                  quotations by the creator, the meaning behind the creation of
                  this collection etc
                </p>
              </div>
            )}
          </div>

          <ul className={css.list}>
            <li className={css.listItem}>
              Floor Price
              <p className={css.listText}>2,835 STX</p>
            </li>
            <li className={css.listItem}>
              Owners
              <p className={css.listText}>1,236</p>
            </li>
            <li className={css.listItem}>
              Items
              <p className={css.listText}>2,500</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
