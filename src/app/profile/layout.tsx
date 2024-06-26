
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/home/Footer";
import ProfileSideBar from "@/components/profile/ProfileSideBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoroz",
  description: "Zoroz : A Multi-Vendor Ecommerce Application",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
    <Navbar />
    <div className="flex flex-col md:flex-row items-start gap-5 w-full md:w-[80%] py-8  mx-auto">
        <ProfileSideBar />
    {children}
    </div>
    <Footer />
   </div>
  );
}
