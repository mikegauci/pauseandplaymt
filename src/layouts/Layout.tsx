interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <title>{title}</title>
      <main>{children}</main>
    </div>
  );
};

export default Layout; 