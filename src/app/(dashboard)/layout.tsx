type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <main className="relative py-4xl">
      <div className="container mx-auto px-md">{children}</div>
    </main>
  );
}
