import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'
type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex flex-col sm:flex-row">
      <div className="w-1/4 bg-gray-200 lg:w-1/6 h-screen">
        <div className="fixed bg-gray-800">
          <Navigation/>
        </div>
      </div>
      
      <div className="w-3/4 bg-green-300 h-auto lg:w-5/6 overflow-y-auto">
        {children}
      </div>
    </div>
    <Footer/>
  </div>
)

export default Layout
