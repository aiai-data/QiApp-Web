import { Locale } from '@/constants/locales'

const termsContent = {
  'zh-CN': {
    title: '服务条款',
    lastUpdated: '最后更新日期：2024年3月',
    sections: [
      {
        title: '1. 服务说明',
        content: [
          'QiApp提供以下服务：',
          '• 基于经络理论的健康管理工具',
          '• 个性化的养生建议和提醒',
          '• 健康数据记录和分析',
          '• 其他相关健康服务'
        ]
      },
      {
        title: '2. 用户责任',
        content: [
          '用户在使用QiApp服务时应：',
          '• 妥善保管账号和密码',
          '• 为了获得更准确的健康建议，建议提供真实的年龄、性别和居住地信息',
          '• 遵守相关法律法规',
          '• 不得滥用或干扰服务运行',
          '• 对账号下的所有活动负责'
        ]
      },
      {
        title: '3. 健康建议声明',
        content: [
          '关于QiApp提供的健康建议：',
          '• 建议仅供参考，不构成医疗诊断',
          '• 用户应在专业医生指导下使用',
          '• 如有疾病症状应及时就医',
          '• 我们不对用户自行判断承担责任'
        ]
      },
      {
        title: '4. 知识产权',
        content: [
          'QiApp的知识产权声明：',
          '• 应用程序及内容的所有权利归我们所有',
          '• 用户不得擅自复制或传播应用内容',
          '• 用户生成的内容版权归用户所有',
          '• 用户授权我们使用其生成的内容'
        ]
      },
      {
        title: '5. 服务变更与终止',
        content: [
          '我们保留以下权利：',
          '• 随时修改或更新服务内容',
          '• 暂停或终止部分或全部服务',
          '• 修改服务条款和收费标准',
          '• 对违规账号采取限制措施'
        ]
      }
    ]
  },
  'en-US': {
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: March 2024',
    sections: [
      {
        title: '1. Service Description',
        content: [
          'QiApp provides the following services:',
          '• Health management tools based on meridian theory',
          '• Personalized health recommendations and reminders',
          '• Health data recording and analysis',
          '• Other related health services'
        ]
      },
      {
        title: '2. User Responsibilities',
        content: [
          'When using QiApp services, users should:',
          '• Maintain account security and password',
          '• For more accurate health advice, we recommend providing accurate age, gender and location information',
          '• Comply with relevant laws and regulations',
          '• Not abuse or interfere with service operations',
          '• Be responsible for all activities under their account'
        ]
      },
      {
        title: '3. Health Advice Disclaimer',
        content: [
          'Regarding health advice provided by QiApp:',
          '• Recommendations are for reference only, not medical diagnosis',
          '• Users should consult professional medical advice',
          '• Seek medical attention for any symptoms',
          '• We are not liable for users\' self-judgment'
        ]
      },
      {
        title: '4. Intellectual Property',
        content: [
          'QiApp intellectual property statement:',
          '• All rights to the app and content belong to us',
          '• Users may not copy or distribute app content without permission',
          '• User-generated content copyright belongs to users',
          '• Users grant us license to use their generated content'
        ]
      },
      {
        title: '5. Service Changes and Termination',
        content: [
          'We reserve the right to:',
          '• Modify or update service content at any time',
          '• Suspend or terminate services partially or entirely',
          '• Modify terms of service and pricing',
          '• Take restrictive measures against violating accounts'
        ]
      }
    ]
  }
}

export function generateStaticParams() {
  return [
    { lang: 'zh-CN' },
    { lang: 'en-US' }
  ] as const
}

export default function Terms(props: {
  params: { lang: Locale }
}) {
  const { params: { lang } } = props
  const content = termsContent[lang]

  if (!content) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
      <p className="text-gray-600 mb-8">{content.lastUpdated}</p>

      <div className="space-y-8">
        {content.sections.map((section, index) => (
          <section key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="space-y-2">
              {section.content.map((text, i) => (
                <p key={i} className={`text-gray-600 ${i === 0 ? 'font-medium' : ''}`}>
                  {text}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p className="mb-4">
          {lang === 'zh-CN' 
            ? '如果您有任何问题或疑虑，请联系我们：' 
            : 'If you have any questions or concerns, please contact us:'}
        </p>
        <a 
          href="mailto:support@qiapp.com" 
          className="text-blue-600 hover:text-blue-800"
        >
          support@qiapp.com
        </a>
      </div>
    </div>
  )
} 