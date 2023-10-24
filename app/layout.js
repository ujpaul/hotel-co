import { Inter } from 'next/font/google'
import './globals.css'
import ReactQueryProvider from './components/ReactQueryProvider'
import MaterialTailwind from './components/MaterialTailwind'
import Header from './components/Header'
import Search from './components/Search'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <MaterialTailwind>
        <html lang='en'>
          <body className={inter.className}>
            <Header />
            <Search />
            {children}
            <Footer />
          </body>
        </html>
      </MaterialTailwind>
    </ReactQueryProvider>
  );
}
