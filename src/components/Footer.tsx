import React from 'react';
import styles from './Footer.module.css';
import logoVK from '../img/vk.png';
import logoInsta from '../img/insta.png';

function Footer() {

  const currentYear = new Date();
  const instaLink = 'https://www.instagram.com/katee_flight/';
  const VKLink = 'https://vk.com/kateeeket';

  return (
    <footer className={ styles.footer }>
      <div className={ styles.socialMediaBlock }>
        <a href={instaLink} target="_blank" rel="noreferrer">
          <img src={logoInsta} alt="Instagram" />
        </a>
      </div>
      <div className={ styles.socialMediaBlock }>
        <a href={VKLink} target="_blank" rel="noreferrer">
          <img src={logoVK} alt="VK" />
        </a>
      </div>
      <div className={ styles.footerText }>
        <p>{currentYear.getFullYear()} Kate Flight</p>
      </div>
    </footer>
  );
}

export default Footer;
