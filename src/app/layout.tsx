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
      <body className="bg-dark text-light antialiased">
        {children}
      </body>
    </html>
  );
} 