import React, { useState } from 'react'
import styles from './Tabs.module.css'
import Wall from './Wall'
import Portfolio from './Portfolio'
import Price from './Price'
import Contacts from './Contacts'

interface TabsButtonProps {
  title: string
  className: string
  onClick: () => void
}

const TabsButton = (props: TabsButtonProps) => {

  return (
    <button
      type="button"
      className={props.className}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  )
}

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
          title="События"
          className={activeTab === 'tab1' ? `${styles.tabsButton} ${styles.active}` : styles.tabsButton}
          onClick={() => setActiveTab('tab1')}
        />
        <TabsButton
          title="Портфолио"
          className={activeTab === 'tab2' ? `${styles.tabsButton} ${styles.active}` : styles.tabsButton}
          onClick={() => setActiveTab('tab2')}
        />
        <TabsButton
          title="Стоимость"
          className={activeTab === 'tab3' ? `${styles.tabsButton} ${styles.active}` : styles.tabsButton}
          onClick={() => setActiveTab('tab3')}
        />
        <TabsButton
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
