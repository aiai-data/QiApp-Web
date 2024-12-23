import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Locale } from '@/constants/locales'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return [
    { lang: 'en-US' },
    { lang: 'zh-CN' }
  ] as const
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

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const resolvedParams = await params;
  
  return (
    <html lang={resolvedParams.lang}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation currentLang={resolvedParams.lang} />
          <main className="flex-grow bg-gradient-to-b from-gray-50 to-white pt-16">
            {children}
          </main>
          <footer className="py-8 bg-gradient-to-t from-gray-50 to-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <div className="space-x-6 mb-6">
                <Link 
                  href={`/${resolvedParams.lang}/privacy`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {resolvedParams.lang === 'zh-CN' ? '隐私政策' : 'Privacy Policy'}
                </Link>
                <span className="text-gray-300">|</span>
                <Link 
                  href={`/${resolvedParams.lang}/terms`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {resolvedParams.lang === 'zh-CN' ? '服务条款' : 'Terms of Service'}
                </Link>
              </div>
              <p className="text-gray-500">
                © 2024 QiApp. {resolvedParams.lang === 'zh-CN' ? '保留所有权利。' : 'All rights reserved.'}
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 