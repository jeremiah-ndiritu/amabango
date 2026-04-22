import { Link } from "react-router-dom";
import aLogo from "@images/logos/amabango-logo-img-v1.png";
import WithBackgroundImage from "@/layouts/WithBackgoundImage";

export default function About() {
  return (
    <WithBackgroundImage image={aLogo} className="bg-bg/70">
      <main className="min-h-screen text-text font-sans px-4 py-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold text-text-strong mb-8">
            About <span className="text-primary">Amabango Designs</span>
          </h1>

          {/* Content */}
          <div className="space-y-5 text-base md:text-lg leading-relaxed">
            <p>
              Amabango Designs is dedicated to providing top-notch tech
              solutions for all your needs. From web development to IT support,
              we've got you covered.
            </p>

            <p>
              Our mission is to empower businesses and individuals with
              innovative technology solutions that drive success and efficiency.
            </p>

            <p>
              Founded by{" "}
              <span className="text-primary font-medium">
                Mr. Simiyu Donald
              </span>
              , our CEO, we pride ourselves on our commitment to excellence and
              customer satisfaction.
            </p>

            <p>
              Contact us to learn more about how we can help you achieve your
              tech goals and take your business to the next level.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              to="/"
              className="inline-block rounded-xl bg-primary px-6 py-3 text-black font-medium shadow hover:opacity-90 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </WithBackgroundImage>
  );
}
