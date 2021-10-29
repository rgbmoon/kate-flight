import React from 'react';
import styles from './Menu.module.css';

interface menuItem {
  name: string;
}

const MenuItem = (props: menuItem) => {

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
      <MenuItem name="Контакты"/>
    </div>
  );
}

export default Menu;
