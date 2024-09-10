export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-center items-center h-screen bg-black bg-opacity-80 px-5 sm:px-0">
      {children}
    </main>
  );
}
