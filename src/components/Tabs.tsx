import React from 'react'
import styles from './Tabs.module.css'
import { Outlet, NavLink } from "react-router-dom"
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

// TODO - Добавить анимацию для переключения табов.
function Tabs() {

  return (
    <React.Fragment>

      <div className={styles.tabsNav}>
        <TabsButton
          title="События"
          link="/news"
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

      <Outlet />

    </React.Fragment>
  )
}

export default Tabs
