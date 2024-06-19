'use client';
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="px-24 mt-10">
        <Product />
      </div>
    </main>
  );
}
