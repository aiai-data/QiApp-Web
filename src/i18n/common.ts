import { Locale } from './index'

export const common: Record<Locale, {
  metadata: {
    title: string
    description: string
  }
  nav: {
    home: string
    privacy: string
    terms: string
  }
  notFound: {
    title: string
    description: string
    backHome: string
  }
}> = {
  'zh-CN': {
    metadata: {
      title: 'QiApp - 您的智能健康管理助手',
      description: '融合传统经络理论与现代健康理念，提供精油使用、健康饮食、运动健身等全方位的健康管理服务'
    },
    nav: {
      home: '首页',
      privacy: '隐私政策',
      terms: '服务条款'
    },
    notFound: {
      title: '404 - 页面未找到',
      description: '抱歉，您访问的页面不存在',
      backHome: '返回首页'
    }
  },
  'en-US': {
    // ... 英文内容
  }
} 