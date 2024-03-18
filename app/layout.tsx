import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import ThemeContextProvider from './context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daily Marble',
  description: 'Mockups for Jar App.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body
          className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50 flex flex-col items-center `}
        >
          <Navbar />
          <main className="min-h-screen w-full max-w-[1200px] py-12">
            {children}
          </main>
        </body>
      </ThemeContextProvider>
    </html>
  )
}
