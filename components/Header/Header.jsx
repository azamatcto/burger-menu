import {AppBar, Box, IconButton, Menu, MenuItem, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountIcon from '@mui/icons-material/AccountCircle'

import Logo from './Logo'
import { useState } from 'react'
import HeaderDrawer from './HeaderDrawer'
import Navbar from './Navbar'

const Header = () => {
  const [drawer, setDrawer] = useState(false)
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleDrawerOpen = () => {
    setDrawer(true)
  }

  const handleDrawerClose = () => {
    setDrawer(false)
  }

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <Box>
        <AppBar position={'static'}>
          <Toolbar>
            <Logo />

            <Box flexGrow={1}></Box>

            <Navbar />

            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleMenu}
                >
                  <AccountIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}

            <IconButton
              size={'large'}
              edge={'start'}
              color={'inherit'}
              aria-label={'open drawer'}
              sx={{ ml: 1, display: { md: 'none' } }}
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
