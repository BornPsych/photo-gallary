import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Photo Gallary",
  description: "This is a full stack photo gallary",
};

function TopNav(){
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallary</div>
        <div>Sign In</div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <TopNav/>
        {children}</body>
    </html>
  );
}
