import React, { FC, useState } from 'react'
import styles from './styles.module.scss'
import { Tab } from '@mui/material'
import { Tabs as MUITabs} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const Tabs:FC = () => {
  const route = useLocation()
  const [value, setValue] = useState(route.pathname)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className={styles.tabsWrapper}>
      <MUITabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons='auto'
        classes={{
          root: styles.tabsRoot,
          indicator: styles.tabsIndicator,
        }}
      >
        <Tab 
          label="События" 
          value='/home' 
          to="/home" 
          component={Link}
          disableRipple
          classes={{
            root: styles.tabRoot,
            selected: styles.tabActive,
          }}
        />
        <Tab 
          label="Портфолио" 
          value='/portfolio' 
          to="/portfolio" 
          component={Link}
          disableRipple 
          classes={{
            root: styles.tabRoot,
            selected: styles.tabActive,
          }}
        />
        <Tab 
          label="Стоимость" 
          value='/price' 
          to="/price" 
          component={Link}
          disableRipple 
          classes={{
            root: styles.tabRoot,
            selected: styles.tabActive,
          }}
        />
        <Tab 
          label="Контакты" 
          value='/contacts' 
          to="/contacts" 
          component={Link}
          disableRipple 
          classes={{
            root: styles.tabRoot,
            selected: styles.tabActive,
          }}
        />
      </MUITabs>
    </div>
  )
}

export { Tabs }
