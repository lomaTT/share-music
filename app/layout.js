import './globals.css'
import {Inter} from 'next/font/google'
import Provider from "../components/Provider";
import Navigation from "@/components/Navigation";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Share music',
  description: 'Share and listen what your friends like!',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Provider>
      <Navigation/>
      {children}
    </Provider>
    </body>
    </html>
  )
}
