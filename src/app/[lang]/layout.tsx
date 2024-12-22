import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { locales, Locale } from '@/constants/locales'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'QiApp - 您的智能健康管理助手',
  description: '融合传统经络理论与现代健康理念，提供精油使用、健康饮食、运动健身等全方位的健康管理服务',
  metadataBase: new URL('https://24qi.app'),
  openGraph: {
    title: 'QiApp - 您的智能健康管理助手',
    description: '融合传统经络理论与现代健康理念，提供精油使用、健康饮食、运动健身等全方位的健康管理服务',
    url: 'https://24qi.app',
    siteName: 'QiApp',
    locale: 'zh_CN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://24qi.app',
    languages: {
      'en-US': 'https://24qi.app/en-US',
      'zh-CN': 'https://24qi.app/zh-CN',
    },
  },
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {
  const { lang } = params

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navigation currentLang={lang} />
        <main className="min-h-screen bg-gray-50 pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 