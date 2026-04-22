import { Outlet } from "react-router-dom";
import ServicesHeader from "./ServicesHeader";

export default function ServicesLayout() {
  return (
    <main className="min-h-screen bg-bg text-text font-sans">
      <ServicesHeader />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </section>
    </main>
  );
}
