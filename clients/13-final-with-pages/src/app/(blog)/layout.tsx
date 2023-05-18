interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen">
      <header>blog header only</header>
      <p>Im a blog dashboard</p>
      {children}
    </div>
  );
}
