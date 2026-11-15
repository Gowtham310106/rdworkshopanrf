import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ANRF Six-Day Workshop 2026 | Velammal Institute of Technology',
  description:
    'ANRF Six-Day Workshop on Interdisciplinary Research for National Priorities: From Problem Identification to Proposal Writing (21 – 26 December 2026) organized by the Research and Development Cell, Velammal Institute of Technology, Chennai.',
  keywords: [
    'ANRF Workshop',
    'Velammal Institute of Technology',
    'Interdisciplinary Research',
    'Viksit Bharat 2047',
    'Atmanirbhar Bharat',
    'Proposal Writing',
    'Research Funding',
    'Chennai Workshop',
  ],
  authors: [{ name: 'Research and Development Cell, Velammal Institute of Technology' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
