import React, { FC } from 'react'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

const Preloader:FC = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        marginTop: '10vh',
        marginBottom: '10vh',
      }}
      spacing={4}
      direction="row">
      <CircularProgress style={{ 'color': '#ff8d8b' }} />
    </Stack>
  )
}

export { Preloader }
