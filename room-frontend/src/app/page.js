import Image from "next/image";
import Building from "@/components/building/Building";
import { getData } from "./api";

export default async function Home() {
  const data = await getData();

  // Handle potential errors during data fetching (optional)
  if (!data) {
    return <div>Error fetching data</div>;
  }

  console.log(data); // Log data for debugging or analysis

  return (
    <div>
      <Building data={data} />
      {/* Optionally include an Image component here if needed */}
    </div>
  );
}
