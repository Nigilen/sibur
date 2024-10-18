import { Roboto_Flex } from 'next/font/google'
import type { Metadata } from "next";
import "@/styles/variables.css";
import "@/styles/globals.css";


const roboto = Roboto_Flex({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['cyrillic', 'latin'],
  variable: '--Roboto',
})


export const metadata: Metadata = {
  title: "Сибур",
  description: "Сайт Сибур",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={roboto.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
