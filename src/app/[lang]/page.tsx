import { Locale } from '@/constants/locales'

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
)

const GooglePlayIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
)

const features = {
  'zh-CN': [
    {
      title: '元气时钟',
      description: '基于子午流注理论，为您展示人体经络能量的变化规律',
      icon: '🕐'
    },
    {
      title: '芳疗指南',
      description: '专业的精油使用指导，帮助您选择适合的精油及使用方法',
      icon: '🌿'
    },
    {
      title: '健康食谱',
      description: '根据节气和体质，推荐适合的饮食方案和营养食谱',
      icon: '🥗'
    },
    {
      title: '运动健身',
      description: '提供个性化的运动建议和健身计划，帮助您保持健康体魄',
      icon: '💪'
    },
    {
      title: '专家咨询',
      description: '汇集专业健康顾问的建议，为您提供权威的健康指导',
      icon: '👨‍⚕️'
    },
    {
      title: '健康记录',
      description: '记录和分析您的健康数据，追踪健康状况的变化',
      icon: '📊'
    }
  ],
  'en-US': [
    {
      title: 'Qi Clock',
      description: 'Track meridian energy flow based on traditional Chinese medicine',
      icon: '🕐'
    },
    {
      title: 'Aromatherapy',
      description: 'Professional guidance on essential oil selection and application methods',
      icon: '🌿'
    },
    {
      title: 'Healthy Recipes',
      description: 'Personalized diet plans and nutritious recipes based on seasons and body constitution',
      icon: '🥗'
    },
    {
      title: 'Fitness Guide',
      description: 'Customized exercise recommendations and workout plans',
      icon: '💪'
    },
    {
      title: 'Expert Advice',
      description: 'Professional health consultants providing authoritative guidance',
      icon: '👨‍⚕️'
    },
    {
      title: 'Health Tracking',
      description: 'Record and analyze your health data to monitor progress',
      icon: '📊'
    }
  ]
}

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          {lang === 'zh-CN' ? 'QiApp 健康助手' : 'QiApp Health Assistant'}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {lang === 'zh-CN' 
            ? '基于传统经络理论的现代健康管理工具'
            : 'Modern health management tool based on traditional meridian theory'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features[lang].map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-8">
          {lang === 'zh-CN' ? '立即下载' : 'Download Now'}
        </h2>
        <div className="flex justify-center space-x-6">
          <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-3">
            <AppleIcon />
            <span>App Store</span>
          </button>
          <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors duration-300 flex items-center space-x-3">
            <GooglePlayIcon />
            <span>Google Play</span>
          </button>
        </div>
      </div>
    </div>
  )
} 