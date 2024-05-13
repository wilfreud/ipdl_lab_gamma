import Image from "next/image";

export default async function LazyImage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={"/baldwin.jpeg"} alt="Baldwin IV" width={900} height={500} />
    </div>
  );
}
