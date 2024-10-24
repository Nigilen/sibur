import { Roboto_Flex } from 'next/font/google'
import type { Metadata } from "next";
import "@/styles/variables.css";
import "@/styles/globals.css";
import { LevelProvider } from '@/src/context/context';
import Script from 'next/script';
import { FRONT_BASE_URL } from '@/src/utils/config';

const roboto = Roboto_Flex({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['cyrillic', 'latin'],
  variable: '--Roboto',
})

export const metadata: Metadata = {
  title: "Сибур",
  description: "Сайт Сибур",
  openGraph: {
    title: 'СИБУР',
    description: 'Менделеевская смена',
    url: FRONT_BASE_URL,
    siteName: 'Сибур',
    locale: 'ru_RU',
    type: 'website'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={roboto.variable}>
      <>
        <Script
          id="yandex-metrika"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(98677476, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });`,
          }}
        />
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/98677476"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </>
      <LevelProvider>
        <body>
          {children}
        </body>
      </LevelProvider>
    </html>
  );
}
