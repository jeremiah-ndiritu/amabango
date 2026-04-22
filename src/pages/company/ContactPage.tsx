import { Link } from "react-router-dom";
import aLogo from "@images/logos/amabango-logo-img-v1.png";
import WithBackgroundImage from "@/layouts/WithBackgoundImage";

export default function Contact() {
  return (
    <WithBackgroundImage image={aLogo} className="bg-bg/70">
      <main className="relative min-h-screen text-text font-sans px-4 py-10 mx-auto max-w-4xl">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold text-text-strong mb-10">
          Our <span className="text-primary">Contacts</span>
        </h1>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* CEO */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Contact the Head
            </h3>

            <p className="text-text-strong font-medium">Mr. Simiyu Donald</p>

            <p className="mt-2 text-sm">
              Email:{" "}
              <a
                href="mailto:simitechdesigns@gmail.com"
                className="text-primary hover:underline"
              >
                simitechdesigns@gmail.com
              </a>
            </p>

            <p className="text-sm">
              Phone:{" "}
              <a
                href="tel:+254769949311"
                className="text-primary hover:underline"
              >
                +254 769 949 311
              </a>
            </p>

            <p className="text-sm mt-1">Address: Kirinyaga, Kenya</p>
          </div>

          {/* Assistant */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Contact the Assistant
            </h3>

            <p className="text-text-strong font-medium">Mr. Jeremiah Ndiritu</p>

            <p className="mt-2 text-sm">
              Email:{" "}
              <a
                href="mailto:digitalized.channel@gmail.com"
                className="text-primary hover:underline"
              >
                digitalized.channel@gmail.com
              </a>
            </p>

            <p className="text-sm">
              Phone:{" "}
              <a
                href="tel:+254716496026"
                className="text-primary hover:underline"
              >
                +254 716 496 026
              </a>
            </p>

            <p className="text-sm mt-1">Address: Kirinyaga, Kenya</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block rounded-xl bg-primary px-6 py-3 text-black font-medium shadow hover:opacity-90 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </WithBackgroundImage>
  );
}
