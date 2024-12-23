import { Locale } from '@/constants/locales'
import Link from 'next/link'
import Image from 'next/image'
import { 
  SunIcon, // 元气时钟
  SparklesIcon, // 经络信息
  CalendarIcon, // 健康日历
  ClipboardDocumentCheckIcon, // 健康自测
  BellAlertIcon, // 智能闹钟
  UserCircleIcon // 个人中心
} from '@heroicons/react/24/outline'

const homeContent = {
  'zh-CN': {
    hero: {
      title: 'QiApp',
      subtitle: '您的智能健康管理助手',
      description: '融合传统经络理论与现代健康理念，为您提供全方位的健康管理服务',
      downloads: {
        appStore: {
          text: 'App Store 下载',
          url: '#', // 替换为实际的 App Store 链接
        },
        googlePlay: {
          text: '安卓商店下载',
          url: '#', // 替换为实际的 Google Play 链接
        }
      }
    },
    features: [
      {
        title: '元气时钟',
        description: '基于传统经络理论，为您提供实时的健康指导',
        icon: SunIcon,
        subFeatures: [
          '经典12时辰表盘显示',
          '现代24小时制切换',
          '实时经络运行状态',
          '当前时辰养生要点',
          '穴位保健建议'
        ]
      },
      {
        title: '经络信息',
        description: '全面的经络健康知识库',
        icon: SparklesIcon,
        subFeatures: [
          '十二经脉详细图解',
          '穴位定位与功效',
          '经络病症早期信号',
          '常见病症溯源分析',
          '养生保健方案'
        ]
      },
      {
        title: '健康日历',
        description: '结合节气的健康管理助手',
        icon: CalendarIcon,
        subFeatures: [
          '24节气健康提醒',
          '个人健康记录',
          '作息规律分析',
          '饮食起居建议',
          '节气养生方案'
        ]
      },
      {
        title: '健康自测',
        description: '智能化的健康评估系统',
        icon: ClipboardDocumentCheckIcon,
        subFeatures: [
          '六经辨证分析',
          '精油使用指南',
          '普拉提和健身建议',
          '健康食谱推荐',
          '专家咨询服务'
        ]
      },
      {
        title: '智能闹钟',
        description: '基于经络规律的健康提醒',
        icon: BellAlertIcon,
        subFeatures: [
          '经络时间智能提醒',
          '养生作息建议',
          '穴位按摩时间',
          '个性化提醒设置',
          '睡眠周期优化'
        ]
      },
      {
        title: '个人中心',
        description: '管理您的健康数据、设置和偏好',
        icon: UserCircleIcon,
        subFeatures: [
          '健康档案管理',
          '个性化设置',
          '数据统计分析',
          '进度追踪',
          '目标设定'
        ]
      }
    ],
    footer: {
      privacyText: '隐私政策',
      termsText: '服务条款',
      copyright: '© 2024 QiApp. 保留所有权利。'
    }
  },
  'en-US': {
    hero: {
      title: 'QiApp',
      subtitle: 'Your Smart Health Management Assistant',
      description: 'Combining traditional meridian theory with modern health concepts for comprehensive health management',
      downloads: {
        appStore: {
          text: 'Download on App Store',
          url: '#', // Replace with actual App Store link
        },
        googlePlay: {
          text: 'Get it on Google Play',
          url: '#', // Replace with actual Google Play link
        }
      }
    },
    features: [
      {
        title: 'Qi Clock',
        description: 'Real-time health guidance based on traditional meridian theory',
        icon: SunIcon,
        subFeatures: [
          'Traditional 12-hour system',
          'Modern 24-hour display',
          'Real-time meridian status',
          'Current time health tips',
          'Acupoint care suggestions'
        ]
      },
      {
        title: 'Meridian Info',
        description: 'Comprehensive meridian health knowledge base',
        icon: SparklesIcon,
        subFeatures: [
          'Detailed 12 meridians guide',
          'Acupoint location & effects',
          'Early warning signals',
          'Common symptoms analysis',
          'Health maintenance plans'
        ]
      },
      {
        title: 'Health Calendar',
        description: 'Health management with solar terms',
        icon: CalendarIcon,
        subFeatures: [
          '24 Solar Terms reminders',
          'Personal health records',
          'Routine analysis',
          'Lifestyle suggestions',
          'Seasonal health tips'
        ]
      },
      {
        title: 'Health Assessment',
        description: 'Smart health evaluation system',
        icon: ClipboardDocumentCheckIcon,
        subFeatures: [
          'Six Meridians Analysis',
          'Essential Oil Guide',
          'Pilates & Fitness Tips',
          'Healthy Recipe Recommendations',
          'Expert Consultation'
        ]
      },
      {
        title: 'Smart Alarm',
        description: 'Health reminders based on meridian patterns',
        icon: BellAlertIcon,
        subFeatures: [
          'Meridian-based reminders',
          'Wellness routine tips',
          'Acupoint massage timing',
          'Personalized alerts',
          'Sleep cycle optimization'
        ]
      },
      {
        title: 'User Center',
        description: 'Manage your health data and preferences',
        icon: UserCircleIcon,
        subFeatures: [
          'Health profile management',
          'Personalization settings',
          'Data analytics',
          'Progress tracking',
          'Goal setting'
        ]
      }
    ],
    footer: {
      privacyText: 'Privacy Policy',
      termsText: 'Terms of Service',
      copyright: '© 2024 QiApp. All rights reserved.'
    }
  }
} as const;

interface HomeProps {
  params: { lang: Locale }
}

export default async function Home({ params }: HomeProps) {
  const resolvedParams = await params;
  const content = homeContent[resolvedParams.lang];

  if (!content) {
    return <div>Error: Content not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/50 backdrop-blur-xl"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {content.hero.title}
          </h1>
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">
            {content.hero.subtitle}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {content.hero.description}
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={content.hero.downloads.appStore.url}
              className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white transition-all duration-300 hover:scale-105 flex items-center"
            >
              <Image 
                src="/app-store-icon.svg" 
                alt="App Store" 
                width={24} 
                height={24} 
                className="mr-3 relative z-10"
              />
              <span className="relative z-10">{content.hero.downloads.appStore.text}</span>
            </a>
            <a
              href={content.hero.downloads.googlePlay.url}
              className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white transition-all duration-300 hover:scale-105 flex items-center"
            >
              <Image 
                src="/google-play-icon.svg" 
                alt="Google Play" 
                width={24} 
                height={24} 
                className="mr-3 relative z-10"
              />
              <span className="relative z-10">{content.hero.downloads.googlePlay.text}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-sm"></div>
                <div className="relative">
                  <div className="mb-4">
                    <feature.icon 
                      className="w-12 h-12 text-blue-500 group-hover:text-blue-600 transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  {'subFeatures' in feature && (
                    <ul className="space-y-2">
                      {feature.subFeatures.map((subFeature, i) => (
                        <li 
                          key={i} 
                          className="flex items-center text-sm text-gray-600 transition-colors duration-200 hover:text-gray-800"
                        >
                          <span className="w-1 h-1 rounded-full bg-blue-500 mr-2"></span>
                          {subFeature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { lang: 'en-US' },
    { lang: 'zh-CN' }
  ] as const;
} 