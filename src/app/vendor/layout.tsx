import Topbar from "@/components/admin/Topbar";
import Sidebar from "@/components/common/Sidebar";
import VendorSidebar from "@/components/vendor/VendorSidebar";
import VendorTopbar from "@/components/vendor/VendorTopbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoroz",
  description: "Zoroz : A Multi-Vendor Ecommerce Application",
};

export default function VendorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-start">
        <VendorSidebar />
        <div className=" flex flex-col w-full">
          <VendorTopbar />
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
