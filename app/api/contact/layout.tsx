import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | 撮影のご相談・ご依頼",
  description:
    "京都を中心に活動するウェディングフォトグラファー tsukasa への撮影相談・ご依頼はこちらから。ロケーション前撮り、結婚式当日、家族写真などお気軽にお問い合わせください。",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}