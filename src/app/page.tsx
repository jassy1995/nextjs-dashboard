'use client';
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="mt-10">
        <Overview />
      </div>
    </main>
  );
}
