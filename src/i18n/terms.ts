import { Locale } from './index'

export const termsContent: Record<Locale, {
  title: string
  lastUpdated: string
  sections: Array<{
    title: string
    content: string[]
  }>
}> = {
  'zh-CN': {
    title: '服务条款',
    lastUpdated: '最后更新日期：2024年3月',
    sections: [
      // ... 中文内容
    ]
  },
  'en-US': {
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: March 2024',
    sections: [
      // ... 英文内容
    ]
  }
} 