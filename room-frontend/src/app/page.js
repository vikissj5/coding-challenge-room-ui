import Image from "next/image";
import Building from "@/components/building/Building";
import { getData } from "./api";

export default async function Home() {
  const data = await getData();


  if (!data) {
    return <div>Error fetching data</div>;
  }


  return (
    <div>
      <Building data={data} />
    </div>
  );
}
