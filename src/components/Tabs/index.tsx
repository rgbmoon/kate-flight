import React, { FC } from 'react'
import styles from './styles.module.scss'
import { TabsButton } from './components/TabsButton'

const Tabs:FC = () => {

  return (
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
  )
}

export { Tabs }
