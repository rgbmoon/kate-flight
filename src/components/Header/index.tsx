import { AppBar, Fade } from '@mui/material'
import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Tabs } from './components/Tabs'
import cn from 'classnames'

const Header:FC = () => {
  return(
    <Fade in timeout={1000}>
      <AppBar 
        position='fixed' 
        classes={{root: cn(styles.appBarRoot, )}}>
        <h1 className={styles.title}>
                kate <span className={styles.color}>flight</span>
        </h1>
        <Tabs />
      </AppBar>
    </Fade>
  )
}

export { Header }
