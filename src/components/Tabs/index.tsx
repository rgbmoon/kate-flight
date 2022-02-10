import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Fade } from '@mui/material'
import { TabsButton } from './components'

const Tabs:FC = () => {

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

export { Tabs }