import React, { useState } from 'react'
import styles from './Tabs.module.css'
import Wall from './Wall'
import Portfolio from './Portfolio'
import Price from './Price'
import Contacts from './Contacts'
import { Link } from "react-router-dom"

interface TabsButtonProps {
  link: string
  title: string
  className: string
  onClick: () => void
}

const TabsButton = (props: TabsButtonProps) => {

  return (
    <Link
      to={props.link}
      className={props.className}
      onClick={props.onClick}
    >
      {props.title}
    </Link>
  )
}

// TODO - Переписать все это безобразие и добавить анимацию для переключения табов.
function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1')

  let clickedTab = <Wall />
  if (activeTab === 'tab1') {
    clickedTab = <Wall />
  }
  if (activeTab === 'tab2') {
    clickedTab = <Portfolio />
  }
  if (activeTab === 'tab3') {
    clickedTab = <Price />
  }
  if (activeTab === 'tab4') {
    clickedTab = <Contacts />
  }

  return (
    <React.Fragment>

      <div className={styles.tabsNav}>
        <TabsButton
          link="/news"
          title="События"
          className={activeTab === 'tab1' ? `${styles.tabsButton} ${styles.active}` : styles.tabsButton}
          onClick={() => setActiveTab('tab1')}
        />
        <TabsButton
          link="/portfolio"
          title="Портфолио"
          className={activeTab === 'tab2' ? `${styles.tabsButton} ${styles.active}` : styles.tabsButton}
          onClick={() => setActiveTab('tab2')}
        />
        <TabsButton
          link="/price"
          title="Стоимость"
          className={activeTab === 'tab3' ? `${styles.tabsButton} ${styles.active}` : styles.tabsButton}
          onClick={() => setActiveTab('tab3')}
        />
        <TabsButton
          link="/contacts"
          title="Контакты"
          className={activeTab === 'tab4' ? `${styles.tabsButton} ${styles.active}` : styles.tabsButton}
          onClick={() => setActiveTab('tab4')}
        />
      </div>

      {clickedTab}

    </React.Fragment>
  )
}

export default Tabs
