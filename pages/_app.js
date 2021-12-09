import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { SessionProvider  } from "next-auth/react"


function MyApp({ Component, pageProps }) {
  return (
  
<SessionProvider>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />

      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </Head>
      <main className="flex-shrink-0">
<div className="container">
      <Component {...pageProps} />
      </div>
</main>

      <footer className="footer mt-auto ml-auto mr-auto py-3 bg-light">
  <div className="container text-center">
    <span className="text-muted ">Application developed by Hammad - www.hammad.pro</span>
  </div>
</footer>



</SessionProvider>
  )
  
  

}

export default MyApp
