import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RaumDoran - World Story Archive',
  description: 'Dev : layla-focalors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
