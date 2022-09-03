import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page-wrapper with-sidebar with-navbar with-transitions">
      <Navbar />

      <Sidebar />

      <div className="content-wrapper">{children}</div>
    </div>
  );
};
