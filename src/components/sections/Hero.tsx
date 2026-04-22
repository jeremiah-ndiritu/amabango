import { Link } from "react-router-dom";
import simiyuPhoto from "@images/Mr-Simiyu-Ronald.jpeg";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-text-strong mb-4">
            Welcome to <span className="text-primary">Amabango Designs</span>
          </h1>

          <p className="text-lg text-primary mb-3">Your Trusted Tech Partner</p>

          <p className="text-text mb-6">
            Providing top-notch tech solutions for all your needs. From web
            development to IT support, we've got you covered.
          </p>

          <div className="flex gap-4">
            <Link
              to="/services"
              className="rounded-xl bg-primary px-5 py-3 text-black font-medium hover:opacity-90 transition shadow"
            >
              Explore Services
            </Link>

            <Link
              to="/contacts"
              className="rounded-xl border border-border px-5 py-3 hover:bg-primary-muted transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Image / CEO */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 rounded-2xl bg-primary-muted px-4 py-2 text-sm border border-primary-border">
            <h3 className="font-semibold text-text-strong">Meet the CEO</h3>
            <p className="text-text">Mr. Simiyu Donald</p>
          </div>

          <img
            src={simiyuPhoto}
            alt="Hero"
            className="rounded-2xl border border-border shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
