import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import Logo from './Logo'
import { useState } from 'react'
import HeaderDrawer from './HeaderDrawer'
import Navbar from './Navbar'

const Header = () => {
  const [drawer, setDrawer] = useState(false)

  const handleDrawerOpen = () => {
    setDrawer(true)
  }

  const handleDrawerClose = () => {
    setDrawer(false)
  }

  return (
    <>
      <Box>
        <AppBar position={'static'}>
          <Toolbar>
            <Logo />
            <Box flexGrow={1}></Box>
            <Navbar />
            <IconButton
              size={'large'}
              edge={'start'}
              color={'inherit'}
              aria-label={'open drawer'}
              sx={{ ml: 2, display: { md: 'none' } }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <HeaderDrawer
        drawer={drawer}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
    </>
  )
}

export default Header
