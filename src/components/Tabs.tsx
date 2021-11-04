import React, { useState } from 'react'
import styles from './Tabs.module.css'
import { Outlet, Link } from "react-router-dom"
interface TabsButtonProps {
  link: string
  title: string
  className: string
}

const TabsButton = (props: TabsButtonProps) => {

  return (
    <Link
      to={props.link}
      className={props.className}
    >
      {props.title}
    </Link>
  )
}

// TODO - Добавить анимацию для переключения табов.
function Tabs() {

  return (
    <React.Fragment>

      <div className={styles.tabsNav}>
        <TabsButton
          link="/news"
          title="События"
          className={styles.tabsButton}
        />
        <TabsButton
          link="/portfolio"
          title="Портфолио"
          className={styles.tabsButton}
        />
        <TabsButton
          link="/price"
          title="Стоимость"
          className={styles.tabsButton}
        />
        <TabsButton
          link="/contacts"
          title="Контакты"
          className={styles.tabsButton}
        />
      </div>

      <Outlet />

    </React.Fragment>
  )
}

export default Tabs
