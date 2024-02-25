import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import { fira } from '@/ui/fonts';
import '@/ui/global.css';
import ContentLayout from '@/ui/layouts/ContentLayout';
import MainLayout from '@/ui/layouts/MainLayout';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s / literat.dev /',
    default: '/ literat.dev /',
  },
  description: 'Fullstack Developer & Whitewater Kayaker & Scout',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <MainLayout>
          <Header description={metadata.description} />
          <Nav />
          <ContentLayout>
            {children}
          </ContentLayout>
        </MainLayout>
        <Footer />
        </body>
    </html>
  )
}
