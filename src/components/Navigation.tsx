'use client'

import Link from 'next/link'
import { Locale, localeNames } from '@/constants/locales'

export default function Navigation({ currentLang }: { currentLang: Locale }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto bg-white shadow rounded-b-lg">
        <nav className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href={`/${currentLang}`} className="font-bold text-xl">
                QiApp
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                href={`/${currentLang}/privacy`}
                className="text-gray-600 hover:text-gray-900"
              >
                {currentLang === 'zh-CN' ? '隐私政策' : 'Privacy Policy'}
              </Link>
              <Link 
                href={`/${currentLang}/terms`}
                className="text-gray-600 hover:text-gray-900"
              >
                {currentLang === 'zh-CN' ? '服务条款' : 'Terms of Service'}
              </Link>
              
              <div className="relative ml-4">
                <select 
                  className="appearance-none bg-white border rounded px-3 py-1"
                  value={currentLang}
                  onChange={(e) => {
                    window.location.pathname = window.location.pathname.replace(
                      currentLang,
                      e.target.value
                    )
                  }}
                >
                  {Object.entries(localeNames).map(([locale, name]) => (
                    <option key={locale} value={locale}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
} 