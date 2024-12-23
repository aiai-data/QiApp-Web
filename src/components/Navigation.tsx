'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale } from '@/constants/locales'

interface NavigationProps {
  currentLang: Locale
}

export default function Navigation({ currentLang }: NavigationProps) {
  const pathname = usePathname()
  const switchLang = currentLang === 'zh-CN' ? 'en-US' : 'zh-CN'
  const langText = currentLang === 'zh-CN' ? 'English' : '中文'

  // 获取当前页面路径（移除语言部分）
  const currentPath = pathname.replace(`/${currentLang}`, '') || '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="w-full max-w-5xl">
        <div className="relative rounded-b-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white backdrop-blur-xl"></div>
          <div className="relative px-6 h-16 flex items-center justify-between">
            <Link href={`/${currentLang}`} className="text-xl font-bold text-gray-800">
              QiApp
            </Link>
            <Link
              href={`/${switchLang}${currentPath}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {langText}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 