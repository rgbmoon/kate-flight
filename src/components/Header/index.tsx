import { AppBar, Collapse, Fade, useScrollTrigger } from '@mui/material'
import React, { FC } from 'react'
import styles from './styles.module.scss'
import { ModalText } from './components/ModalText'
import { Tabs } from './components/Tabs'

const Header:FC = () => {
  const scrollTrigger = useScrollTrigger()

  return(
    <Fade in timeout={2000}>
      <AppBar position='fixed' classes={{root: styles.appBarRoot}}>
        <Collapse collapsedSize={0} orientation='vertical' in={!scrollTrigger}>
          <h1 className={styles.title}>
                kate <span className={styles.color}>flight</span>
          </h1>
          <ModalText />
        </Collapse>
        <Tabs />
      </AppBar>
    </Fade>
  )
}

export { Header }
