import Link from 'next/link'
import { Locale } from '@/constants/locales'

export default function NotFound({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">
        {lang === 'zh-CN' ? '页面未找到' : 'Page Not Found'}
      </h2>
      <Link
        href={`/${lang}`}
        className="text-blue-600 hover:text-blue-800"
      >
        {lang === 'zh-CN' ? '返回首页' : 'Return to Home'}
      </Link>
    </div>
  )
} 