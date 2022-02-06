import React from 'react'
import styles from './Tabs.module.css'
import { NavLink } from "react-router-dom"
interface TabsButtonProps {
  link: string
  title: string
}

const TabsButton = (props: TabsButtonProps) => {

  return (
    <NavLink
      to={props.link}
      className={({ isActive }) =>
        [
          styles.tabsButton,
          isActive ? styles.active : null
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      {props.title}
    </NavLink >
  )
}

// TODO Сделать градиент справа как на Collapsе элементе.
function Tabs() {

  return (
    <div className={styles.tabsWrapper}>
      <TabsButton
        title="События"
        link="/home"
      />
      <TabsButton
        title="Портфолио"
        link="/portfolio"
      />
      <TabsButton
        title="Стоимость"
        link="/price"
      />
      <TabsButton
        title="Контакты"
        link="/contacts"
      />
    </div>
  )
}

export default Tabs