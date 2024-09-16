import type { Metadata } from 'next'
import './globals.css'

import { ThemeProvider } from 'next-themes'
import Header from './components/Header'
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '🍀 부키 | booki',
  description: 'your reading mate',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <div
          className="min-h-lvh p-5 my-0 mx-auto max-w-600 bg-slate-200
        "
        >
          <Header />
          <main>{children}</main>
          <footer> 제작 @jeongsu </footer>
        </div>
      </body>
    </html>
  )
}
