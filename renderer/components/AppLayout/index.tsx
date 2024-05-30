import { ReactNode } from 'react';
import SideNavbar from '../../components/SideNavbar';

export default function AppLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="w-full h-svh flex">
      <SideNavbar />
      <main className="flex-1 p-8 min-h-svh overflow-y-auto">{children}</main>
    </div>
  );
}
