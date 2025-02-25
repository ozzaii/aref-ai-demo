import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Aref.ai | Enterprise AI Solutions',
  description: 'Put AI to Work - Enterprise-grade AI platform for agents, assistants, and intelligent search solutions',
  keywords: 'AI, enterprise, consulting, agents, assistants, machine learning, artificial intelligence',
  authors: [{ name: 'Aref.ai Team' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Fix base URL issues in GitHub Pages
              const base = document.createElement('base');
              base.href = window.location.pathname.includes('/aref-ai-demo') 
                ? '/aref-ai-demo/' 
                : '/';
              document.head.appendChild(base);
            })();
          `
        }} />
      </head>
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  );
} 