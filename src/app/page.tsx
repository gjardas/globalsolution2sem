import Image from "next/image";
import banner from "@/img/banner.jpg"

export default function Home() {
  return (
    <main>
        <Image src={banner} alt="Banner FreeSun"/>
    </main>
  );
}
