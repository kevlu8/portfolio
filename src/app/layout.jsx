import './globals.css';
import { Inter } from 'next/font/google';
import TopBar from '../components/topbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kevin Lu',
  description: 'Portfolio page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <div className="bg-gray-900 text-gray-100 min-h-[calc(100vh-3rem)] min-w-screen p-10 px-14 pt-3 leading-relaxed">{children}</div>
      </body>
    </html>
  );
};
