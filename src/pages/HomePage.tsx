import Adverts from "@/components/sections/Adverts";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";


export default function Home() {


  return (
    <main className="min-h-screen bg-bg text-text font-sans">
      <Header />
      <Hero />
      <Adverts />

      {/* ================= INSTALL BANNER ================= */}
      {/* <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 rounded-full border border-border bg-surface px-5 py-3 shadow-lg">
        <span className="text-sm">📱 App available!</span>
        <button className="rounded-lg bg-primary px-4 py-2 text-black text-sm font-medium hover:opacity-90 transition">
          Install
        </button>
      </div> */}
    </main>
  );
}
