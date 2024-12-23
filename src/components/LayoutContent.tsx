'use client';

import { Locale } from '@/constants/locales';
import Navigation from '@/components/Navigation';

interface LayoutContentProps {
  lang: Locale;
  children: React.ReactNode;
}

export default function LayoutContent({ lang, children }: LayoutContentProps) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = '${lang}'`,
        }}
      />
      <Navigation currentLang={lang} />
      <main className="min-h-screen bg-gray-50 pt-16">
        {children}
      </main>
    </>
  );
} 