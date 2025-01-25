export default function ROneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)] sm:p-20">
      From R1 Layout
      {children}
    </section>
  );
}
