import Navbar from "@/components/Navbar";

export default function ShopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="w-full min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        {children}
    </main>
}
