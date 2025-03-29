"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const cards = [
    { name: "Clients", count: 1023, link: "/clients" },
    { name: "Suppliers", count: 10125, link: "/suppliers" },
    { name: "Orders", count: 579, link: "/orders" },
    { name: "Sales", count: 328, link: "/sales" },
    { name: "Purchase", count: null, link: "/purchase" },
  ];

  return (
    <div className="h-[calc(100vh-62px)] bg-gray-100 dark:bg-gray-900 p-4 flex flex-col items-center relative">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100 w-[100%]">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => router.push(card.link)}
            className="cursor-pointer bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-100"
          >
            <h2 className="text-lg mb-2 ">{card.name}</h2>
            {card.count !== null && <p className="text-md">{card.count}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
