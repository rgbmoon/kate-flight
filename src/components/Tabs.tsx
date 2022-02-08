import React from 'react'
import styles from './Tabs.module.css'
import { NavLink } from "react-router-dom"
import { Fade } from '@mui/material'
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

function Tabs() {

  return (
    <Fade in timeout={2000}>
      <div className={styles.container}>
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
      </div>
    </Fade>
  )
}

export default Tabs