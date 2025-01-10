import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-3 gap-20 px-32 mt-10">
      <Link href={`/photos/1`} className="bg-teal-700 hover:shadow-md hover:scale-105 transition-all duration-150 hover:bg-teal-600 text-white rounded flex items-center justify-center size-[300px]">1</Link>
      <Link href={`/photos/2`} className="bg-teal-700 hover:shadow-md hover:scale-105 transition-all duration-150 hover:bg-teal-600 text-white rounded flex items-center justify-center size-[300px]">2</Link>
      <Link href={`/photos/3`} className="bg-teal-700 hover:shadow-md hover:scale-105 transition-all duration-150 hover:bg-teal-600 text-white rounded flex items-center justify-center size-[300px]">3</Link>
      <Link href={`/photos/4`} className="bg-teal-700 hover:shadow-md hover:scale-105 transition-all duration-150 hover:bg-teal-600 text-white rounded flex items-center justify-center size-[300px]">4</Link>
      <Link href={`/photos/5`} className="bg-teal-700 hover:shadow-md hover:scale-105 transition-all duration-150 hover:bg-teal-600 text-white rounded flex items-center justify-center size-[300px]">5</Link>
      <Link href={`/photos/6`} className="bg-teal-700 hover:shadow-md hover:scale-105 transition-all duration-150 hover:bg-teal-600 text-white rounded flex items-center justify-center size-[300px]">6</Link>
    </div>
  );
}
