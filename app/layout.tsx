import type { Metadata } from 'next'
import './globals.css'
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
})

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
    <html lang="en" className={bricolageGrotesque.className}>
      <body>{children}</body>
    </html>
  );
}
