import { Suspense } from "react";

import { getCabin, getCabins } from "@/app/_lib/data-service";

import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);

  return {
    title: `Cabin ${name} `,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  // const settings = await getSettings();
  // s;

  // console.log(params);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}

// Placeholder data
// const cabin = {
//   id: 89,
//   name: "001",
//   maxCapacity: 4,
//   regularPrice: 600,
//   discount: 0,
//   description:
//     "Discover the ultimate getaway for couples in cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabins offers a secluded and intimate retreat.",
//   image:
//     "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg",
// };

// export const metadata = {
//   title: "Cabin",
// };
