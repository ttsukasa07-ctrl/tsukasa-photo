import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "tsukasa | Wedding Photographer in Kyoto",
    template: "%s | tsukasa",
  },

  description:
    "京都を中心に活動するウェディングフォトグラファー tsukasa。ロケーション前撮り、結婚式当日、家族写真まで、ふたりらしさを大切に撮影しています。",

  keywords: [
    "京都 ウェディングフォトグラファー",
    "京都 結婚式 写真",
    "京都 前撮り",
    "ロケーション前撮り",
    "ウェディングフォト",
    "結婚式 カメラマン",
    "家族写真 京都",
    "tsukasa photographer",
  ],

  authors: [
    {
      name: "tsukasa",
    },
  ],

  creator: "tsukasa",
  publisher: "tsukasa",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "tsukasa | Wedding Photographer in Kyoto",
    description:
      "京都を中心に活動するウェディングフォトグラファー tsukasa。ロケーション前撮り、結婚式当日、家族写真まで撮影しています。",
    type: "website",
    locale: "ja_JP",
  },

  twitter: {
    card: "summary_large_image",
    title: "tsukasa | Wedding Photographer in Kyoto",
    description:
      "京都を中心に活動するウェディングフォトグラファー tsukasa。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${cormorant.variable} ${notoSansJP.variable}`}>
        {children}
      </body>
    </html>
  );
}