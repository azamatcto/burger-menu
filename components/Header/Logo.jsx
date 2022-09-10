import React from 'react'
import NextLink from 'next/link'
import { Box, Typography } from '@mui/material'

const Logo = () => {
  return (
    <Box>
      <NextLink href={'/'}>
        <a>
          <Typography variant="h6" component="div">
            Codebox
          </Typography>
        </a>
      </NextLink>
    </Box>
  )
}

export default Logo
