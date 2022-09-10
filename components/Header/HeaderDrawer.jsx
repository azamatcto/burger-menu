import {
  Box,
  Divider,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

import CloseIcon from '@mui/icons-material/Close'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import StarBorder from '@mui/icons-material/StarBorder'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'

import { useState } from 'react'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

const HeaderDrawer = ({ drawer, handleDrawerOpen, handleDrawerClose }) => {
  const theme = useTheme()
  const [expend, setExpend] = useState(false)

  const handleExpend = () => {
    setExpend(!expend)
  }

  return (
    <Box>
      <SwipeableDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant={'temporary'}
        anchor={'left'}
        open={drawer}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>

          <ListItem disablePadding>
            <ListItemButton onClick={handleExpend}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Inbox'} />
              {expend ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={expend} timeout="auto" unmountOnExit>
            <List component="ul" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </Box>
  )
}

export default HeaderDrawer
