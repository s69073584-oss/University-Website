
import type { ReactNode } from "react";
import AdminHeader from "@/components/AdminDashboard/AdminHeader";
import AdminSidebar from "@/components/AdminDashboard/AdminSidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#f7f9f6]">
      <AdminSidebar />
      <div className="min-w-0 flex-1">
        <AdminHeader />
        {children}
      </div>
    </div>
  );
}
