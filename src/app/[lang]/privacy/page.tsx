import { Locale } from '@/constants/locales';

interface PrivacyProps {
  params: { lang: Locale };
}

const privacyContent = {
  'zh-CN': {
    title: '隐私政策',
    lastUpdated: '最后更新日期：2024年3月',
    sections: [
      {
        title: '1. 信息收集',
        content: [
          '我们收集的信息包括：',
          '• 基础账户信息（用户ID、昵称）：用于识别用户身份，提供个性化服务体验',
          '• 个人特征信息（年龄、性别、所在地）：用于生成更准确的健康建议',
          '• 健康数据（自测问答记录）：用于分析症状，提供健康建议',
          '• 使用数据（使用习惯和偏好）：用于改进服务质量',
          '• 设备信息：用于确保服务的安全性和稳定性'
        ]
      },
      {
        title: '2. 信息使用',
        content: [
          '我们使用收集的信息：',
          '• 提供个性化的健康建议和养生方案',
          '• 改进和优化我们的服务',
          '• 发送服务通知和健康提醒',
          '• 进行数据分析和研究',
          '• 验证购买的服务和提供客户支持'
        ]
      },
      {
        title: '3. 信息保护',
        content: [
          '我们采取以下措施保护您的信息：',
          '• 采用业界标准的加密技术保护数据传输和存储',
          '• 实施严格的访问控制机制',
          '• 定期进行安全评估和审计',
          '• 对员工进行隐私保护培训',
          '• 及时更新安全措施以应对新的安全挑战'
        ]
      },
      {
        title: '4. 信息共享',
        content: [
          '在以下情况下可能共享信息：',
          '• 获得您的明确授权',
          '• 法律法规要求',
          '• 保护用户权益和公共安全',
          '• 与授权合作伙伴共享以提供服务',
          '注意：我们绝不会出售您的个人信息'
        ]
      },
      {
        title: '5. 用户权利',
        content: [
          '您对个人信息拥有以下权利：',
          '• 访问和查看个人信息',
          '• 更正或更新个人信息',
          '• 删除个人信息',
          '• 撤回授权同意',
          '• 导出个人数据'
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
          '• Basic Account Information (User ID, Nickname): For user identification and personalized service',
          '• Personal Characteristics (Age, Gender, Location): For generating accurate health advice',
          '• Health Data (Assessment Results): For symptom analysis and health recommendations',
          '• Usage Data (Habits and Preferences): For service improvement',
          '• Device Information: For security and stability'
        ]
      },
      {
        title: '2. Information Usage',
        content: [
          'We use collected information to:',
          '• Provide personalized health advice and wellness plans',
          '• Improve and optimize our services',
          '• Send service notifications and health reminders',
          '• Conduct data analysis and research',
          '• Verify purchased services and provide customer support'
        ]
      },
      {
        title: '3. Information Protection',
        content: [
          'We protect your information through:',
          '• Industry-standard encryption for data transmission and storage',
          '• Strict access control mechanisms',
          '• Regular security assessments and audits',
          '• Employee privacy protection training',
          '• Timely security measure updates'
        ]
      },
      {
        title: '4. Information Sharing',
        content: [
          'Information may be shared when:',
          '• We have your explicit authorization',
          '• Required by law',
          '• Protecting user rights and public safety',
          '• Sharing with authorized partners for service provision',
          'Note: We never sell your personal information'
        ]
      },
      {
        title: '5. User Rights',
        content: [
          'You have the following rights regarding your personal information:',
          '• Access and view personal information',
          '• Correct or update personal information',
          '• Delete personal information',
          '• Withdraw consent',
          '• Export personal data'
        ]
      }
    ]
  }
} as const;

export default async function Privacy({ params }: PrivacyProps) {
  const resolvedParams = await params;
  const content = privacyContent[resolvedParams.lang];

  if (!content) {
    return <div>Error: Content not found for the specified language</div>;
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
    </div>
  );
}

export function generateStaticParams() {
  return [
    { lang: 'en-US' },
    { lang: 'zh-CN' }
  ] as const;
} 