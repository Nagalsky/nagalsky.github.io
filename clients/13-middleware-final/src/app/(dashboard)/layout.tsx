interface AuthLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: AuthLayoutProps) {
  return <div className="min-h-screen"><header>header only</header><p>Im a dashboard</p>{children}</div>
}