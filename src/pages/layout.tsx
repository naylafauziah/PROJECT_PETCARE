import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* Tambahkan NavigationMenu di sini */}
      <NavigationMenu />
      <main className="p-4">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}