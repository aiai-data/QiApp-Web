import { Locale } from '@/constants/locales'

const privacyContent = {
  'zh-CN': {
    title: '隐私政策',
    lastUpdated: '最后更新日期：2024年3月',
    sections: [
      {
        title: '1. 信息收集',
        content: [
          '我们收集的信息包括：',
          '• 账户信息（用户ID、账户状态、订阅信息等）',
          '• 基本个人信息（年龄、性别）',
          '• 位置信息（居住地）',
          '• 健康自测数据（问答结果、健康状况记录）',
          '• 设备信息（设备型号、操作系统版本）',
          '• 使用数据（应用使用频率、功能偏好）'
        ]
      },
      {
        title: '2. 信息使用',
        content: [
          '我们使用收集的信息用于：',
          '• 验证用户身份和服务权限',
          '• 根据年龄性别提供更准确的健康建议',
          '• 结合居住地天气情况提供针对性的养生建议',
          '• 基于健康自测结果分析用户健康状况',
          '• 持续优化和改进服务质量',
          '• 发送重要通知和服务更新'
        ]
      },
      {
        title: '3. 数据存储和保护',
        content: [
          '我们采取多重措施保护您的信息：',
          '• 使用行业标准的加密技术保护数据存储和传输',
          '• 实施严格的内部数据访问控制',
          '• 定期进行安全评估和系统更新',
          '• 遵守相关法律法规要求',
          '• 制定数据安全应急响应预案'
        ]
      },
      {
        title: '4. 信息共享',
        content: [
          '我们不会出售您的个人信息。仅在以下情况下共享信息：',
          '• 经您明确同意',
          '• 法律法规要求',
          '• 保护用户权益和公共安全',
          '• 与授权合作伙伴共同提供服务'
        ]
      },
      {
        title: '5. 用户权利',
        content: [
          '您对个人信息拥有以下权利：',
          '• 访问和导出数据',
          '• 更正或更新信息',
          '• 删除账户和相关数据',
          '• 选择退出某些数据收集'
        ]
      }
    ]
  },
  'en-US': {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: March 2024',
    sections: [
      {
        title: '1. Information Collection',
        content: [
          'We collect the following information:',
          '• Account information (user ID, account status, subscription details)',
          '• Basic personal information (age, gender)',
          '• Location information (place of residence)',
          '• Health assessment data (Q&A results, health condition records)',
          '• Device information (device model, OS version)',
          '• Usage data (app usage frequency, feature preferences)'
        ]
      },
      {
        title: '2. Information Usage',
        content: [
          'We use the collected information to:',
          '• Verify user identity and service access',
          '• Provide more accurate health advice based on age and gender',
          '• Offer weather-based health recommendations for your location',
          '• Analyze user health conditions based on assessment results',
          '• Continuously optimize and improve service quality',
          '• Send important notifications and service updates'
        ]
      },
      {
        title: '3. Data Storage and Protection',
        content: [
          'We protect your information through:',
          '• Industry-standard encryption for data storage and transmission',
          '• Strict internal data access controls',
          '• Regular security assessments and system updates',
          '• Compliance with applicable laws and regulations',
          '• Data security incident response procedures'
        ]
      },
      {
        title: '4. Information Sharing',
        content: [
          'We do not sell your personal information. We only share information:',
          '• With your explicit consent',
          '• When required by law',
          '• To protect user rights and public safety',
          '• With authorized partners to provide services'
        ]
      },
      {
        title: '5. User Rights',
        content: [
          'You have the following rights regarding your personal information:',
          '• Access and export your data',
          '• Correct or update information',
          '• Delete account and related data',
          '• Opt-out of certain data collection'
        ]
      }
    ]
  }
}

export default function Privacy({
  params,
}: {
  params: { lang: Locale }
}) {
  const content = privacyContent[params.lang]

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
          {params.lang === 'zh-CN' 
            ? '如果您有任何问题或疑虑，请联系我们：' 
            : 'If you have any questions or concerns, please contact us:'}
        </p>
        <a 
          href="mailto:privacy@qiapp.com" 
          className="text-blue-600 hover:text-blue-800"
        >
          privacy@qiapp.com
        </a>
      </div>
    </div>
  )
} 