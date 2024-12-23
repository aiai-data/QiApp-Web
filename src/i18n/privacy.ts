import { Locale } from './index'

export const privacyContent: Record<Locale, {
  title: string
  lastUpdated: string
  sections: Array<{
    title: string
    content: string[]
  }>
}> = {
  'zh-CN': {
    // ... 中文内容
  },
  'en-US': {
    // ... 英文内容
  }
} 