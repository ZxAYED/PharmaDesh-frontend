import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["italic"],
});
export const metadata: Metadata = {
  title: "PharmaDesh",
  description: "A medicine ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon/favicon.png" />
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
