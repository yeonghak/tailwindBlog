import '@/css/tailwind.css'
import '@/css/prism.css'
import '@/css/custom.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { useEffect } from 'react'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

import { Router } from 'next/router'
Router.events.on('routeChangeComplete', (url) => {
  try {
    window._hmt.push(['_trackPageview', url])
  } catch (e) {}
})

export default function App({ Component, pageProps }) {
  const getAnalyticsTag = () => {
    return {
      __html: `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?8f8def5f99b256f42f3354be5d24307e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    }
  }

  useEffect(() => {
    function enableGoogleAdsense() {
      const head = document.getElementsByTagName('head')[0]
      const scriptElement = document.createElement(`script`)
      scriptElement.type = `text/javascript`
      scriptElement.async
      scriptElement.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADSENSE_CLIENT}`
      scriptElement.crossOrigin = 'anonymous'
      head.appendChild(scriptElement)
    }
    enableGoogleAdsense()
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script dangerouslySetInnerHTML={getAnalyticsTag()} />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
