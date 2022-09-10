import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Box } from '@mui/material'

const Layout = ({ children }) => {
  return (
    <Box display={'flex'} flexDirection={'column'} minHeight={'100%'}>
      <Header />
      <Box flex={'auto'}>{children}</Box>
      <Footer />
    </Box>
  )
}

export default Layout
