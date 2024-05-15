import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as  BaiJamjuree} from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto'})
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree'})

export const metadata: Metadata = {
  title: 'NLW Spactime',
  description: 'Uma capsula do tempo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
