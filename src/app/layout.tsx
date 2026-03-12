import type { Metadata } from 'next';

import GetAllCourses from '@/services/hooks/GetAllCourses';

import ToastWrapper from '@/components/ToastWrapper/ToastWrapper';

import ReduxProvider from '@/store/ReduxProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'skypro-fitness',
  description: 'skypro-fitness-app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>
          <GetAllCourses />
          {children}

          <ToastWrapper />
        </body>
      </html>
    </ReduxProvider>
  );
}
