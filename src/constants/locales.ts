export const defaultLocale = 'zh-CN'
export const locales = ['en-US', 'zh-CN'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  'en-US': 'English',
  'zh-CN': '简体中文',
} 