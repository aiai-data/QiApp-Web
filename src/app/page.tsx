export const dynamic = 'force-static'

export default function Page() {
  if (typeof window !== 'undefined') {
    window.location.href = '/zh-CN/'
  }

  return null
} 