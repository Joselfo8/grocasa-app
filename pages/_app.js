import Layout from '../shared/components/layout/layout.jsx'
import '../assets/scss/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
