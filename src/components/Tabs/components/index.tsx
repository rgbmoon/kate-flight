import React, { FC } from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'


interface TabsButtonProps {
  link: string
  title: string
}

const TabsButton:FC<TabsButtonProps> = ({ link, title }) => {

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        [
          styles.tabsButton,
          isActive ? styles.active : null
        ]
          .filter(Boolean)
          .join(' ')
      }
    >
      {title}
    </NavLink >
  )
}

export { TabsButton }
