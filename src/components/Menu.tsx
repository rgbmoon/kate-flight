import React from 'react';
import styles from './Menu.module.css';

const MenuItem = (props) => {

  return (
    <a className={ styles.menuItem }>
      { props.name }
    </a>
  );
}

function Menu() {

  return (
    <div className={ styles.menu }>
      <MenuItem name="События"/>
      <MenuItem name="Портфолио"/>
      <MenuItem name="Стоимость"/>
      <MenuItem name="Обо мне"/>
    </div>
  );
}

export default Menu;
