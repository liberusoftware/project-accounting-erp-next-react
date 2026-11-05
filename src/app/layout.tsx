import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Accounting ERP", description: "Next.js and React project foundation" };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
