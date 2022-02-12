import { AppBar, Fade } from '@mui/material'
import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Tabs } from './components/Tabs'
import cn from 'classnames'

const Header:FC = () => {
  const handleClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return(
    <Fade in timeout={2000}>
      <AppBar 
        position='fixed' 
        classes={{root: cn(styles.appBarRoot, )}}>
        <h1 className={styles.title} onClick={handleClick}>
                kate <span className={styles.color}>flight</span>
        </h1>
        <Tabs />
      </AppBar>
    </Fade>
  )
}

export { Header }
