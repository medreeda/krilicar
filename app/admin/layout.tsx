import Menu from "../../components/admincomp/Menu"; // تأكد أنه ليس Sidebar آخر
import Navbar from "../../components/admincomp/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* ✅ Sidebar */}
      <Menu />

      {/* ✅ تأكد أن المحتوى يأخذ المساحة المتبقية */}
      <div className="flex-1 bg-[#F7F8FA] flex flex-col h-full">
        <Navbar />
        <div className="p-6 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
