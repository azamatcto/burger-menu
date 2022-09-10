import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import NextLink from 'next/link'

const Navbar = () => {
  return (
    <Box sx={{display: {xs: 'none', md: 'block'}}}>
      <List component={'nav'} disablePadding>
        <List component={'ul'} sx={{display: 'flex'}}>
          <ListItem disablePadding>
            <NextLink href={'/'}>
              <a>
                <ListItemButton>
                  <ListItemText>Home</ListItemText>
                </ListItemButton>
              </a>
            </NextLink>
          </ListItem>
          <ListItem disablePadding>
            <NextLink href={'/about'}>
              <a>
                <ListItemButton>
                  <ListItemText>About</ListItemText>
                </ListItemButton>
              </a>
            </NextLink>
          </ListItem>
        </List>
      </List>
    </Box>
  )
}

export default Navbar
