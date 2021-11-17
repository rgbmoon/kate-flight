import React from 'react';
import styles from './Utils.module.css';
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

export const Preloader = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        marginTop: '20vh',
      }}
      spacing={4}
      direction="row">
      <CircularProgress style={{ 'color': '#ff8d8b' }} />
    </Stack>
  );
}

export const FailMessage = () => {
  return (
    <div className={styles.fail}>
      <p>Произошла ошибка при загрузке данных.</p>
      <p><button onClick={() => window.location.reload()}>Попробуем</button> еще раз?</p>
    </div>
  )
}