import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "SASHA INNOWORKS",
  description: "Empowering Automation through AI, Robotics & Vision",
};

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
