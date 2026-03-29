import './globals.css'
import React from 'react';

export const metadata = {
  title: 'منصة الفيزياء التعليمية',
  description: 'منصة فخمة لتعليم الفيزياء',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}

