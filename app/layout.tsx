import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alparithmn',
  description: 'Alparithmn',
  generator: 'Alparithmn',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
