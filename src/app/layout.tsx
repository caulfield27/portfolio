import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/widgets/sidebar";
import { Mobilesidebar } from "@/entities/mobileSidebar";

export const metadata: Metadata = {
  title: "portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app_container">
          <Mobilesidebar />
          <Sidebar />
          <div className="pages_content">
            <div className='wrapper'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
