import React from 'react';
import styles from './Footer.module.css';
import logoVK from '../img/vk.png';
import logoInsta from '../img/insta.png';

function Footer() {

  const currentYear = new Date()

  return (
    <footer className={ styles.footer }>
      <div className={ styles.socialMediaBlock }>
        <a href="https://www.instagram.com/katee_flight/" target="_blank">
          <img src={logoInsta} alt="Instagram" />
        </a>
      </div>
      <div className={ styles.socialMediaBlock }>
        <a href="https://vk.com/kateeeket" target="_blank">
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
