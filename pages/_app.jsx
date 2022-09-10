import '../styles/globals.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '../styles'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
