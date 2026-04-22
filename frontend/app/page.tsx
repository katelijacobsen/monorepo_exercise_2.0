import Image from "next/image";
//import Map from "@/components/Map.js"
import dynamic from "next/dynamic";
import Map from "../components/Map"



export default function Home() {
  return (
    <div >
      <main>
      <Map />
      </main>
    </div>
  );
}
