import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {DashboardNavbar} from "@/components/DashboardNavbar";
import {SessionProvider} from "next-auth/react";

export default function DashboardLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
      <Header><SessionProvider><DashboardNavbar/></SessionProvider></Header>
        {children}
        <Footer/>
      </body>
    </html>
  );
}