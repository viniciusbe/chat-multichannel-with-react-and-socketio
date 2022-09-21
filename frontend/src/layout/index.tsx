import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="page-wrapper with-sidebar with-navbar with-transitions"
      data-sidebar-type="full-height"
    >
      <Navbar />

      <Sidebar />

      <div className="content-wrapper p-20">{children}</div>
    </div>
  );
};
