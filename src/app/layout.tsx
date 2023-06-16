import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/vars.css'

import { Montserrat } from 'next/font/google'
import Head from 'next/head'

// internal components
import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
});


export const metadata = {
  title: 'MyTube',
  description: `A web app which consolidates John Bryce's favourited Youtube channels latest videos`,
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <body className={montserrat.className} >
        <Layout>
        <Header />
        {children}
        </Layout>
      </body>  
    </html>
  )
}
