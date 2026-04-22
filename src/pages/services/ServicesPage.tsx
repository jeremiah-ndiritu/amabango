interface ServiceItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Props {
  title: string;
  endpoint: string;
}

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function ServicesPage({ title, endpoint }: Props) {
  const [items, setItems] = useState<ServiceItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products/${endpoint}`)
      .then((res) => res.json())
      .then((data) => setItems(data.products));
  }, [endpoint]);

  return (
    <>
      <Helmet>
        <title>{title ? `Amabango Designs | ${title}` : "Amabango Designs"}</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-semibold text-text-strong mb-8">
          {title}
        </h1>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-border bg-card p-4 hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt="Item image"
                className="rounded-xl mb-4 border border-border"
              />

              <h3 className="font-semibold text-primary">{item.name}</h3>
              <p className="text-sm mt-2 text-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
