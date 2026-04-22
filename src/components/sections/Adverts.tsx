export default function Adverts() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-text-strong mb-4">
          Featured Services
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {["Web Development", "AutoCAD Design", "IT Support"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border p-4 hover:shadow-md transition"
            >
              <h3 className="font-medium text-text-strong">{item}</h3>
              <p className="text-sm text-text mt-2">
                High-quality professional solutions tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
