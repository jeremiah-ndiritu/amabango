import { useEffect, useState } from "react";

interface Advert {
  id: number;
  h3: string;
  p: string;
  img: string;
}

export default function ServicesIndex() {
  const [adverts, setAdverts] = useState<Advert[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/adverts`)
      .then((res) => res.json())
      .then((data) => setAdverts(data.adverts));
  }, []);

  return (
      <div className="space-y-10">
        <h1 className="text-3xl font-semibold text-text-strong">
          Our <span className="text-primary">Services</span>
        </h1>

        <div className="space-y-6">
          {adverts.map((ad, i) => (
            <div
              key={ad.id}
              className={`grid gap-6 items-center md:grid-cols-2 ${
                (i + 1) % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                alt="AD image"
                src={ad.img}
                className="rounded-2xl border border-border shadow-sm"
              />

              <div>
                <h3 className="text-xl font-semibold text-primary">{ad.h3}</h3>
                <p className="mt-2 text-text">{ad.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
