import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTop from "@/src/app/components/new/scrollToTop";
import { UserProvider } from "@/src/app/components/new/userContext"; 
import ProtectedAdminRoute from "@/src/app/components/new/protectedAdminRoute"; 



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin Section",
  description: "Admin Section",
};

export default function RootLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <UserProvider>
        <ProtectedAdminRoute>
          
         <ScrollToTop/>
          <main>{children}</main>
         
        </ProtectedAdminRoute>
      </UserProvider>
    </div>
  );
}