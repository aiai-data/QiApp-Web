declare module 'next/navigation' {
  export interface LayoutProps {
    children: React.ReactNode
    params: {
      lang: 'zh-CN' | 'en-US'
    }
  }
} 