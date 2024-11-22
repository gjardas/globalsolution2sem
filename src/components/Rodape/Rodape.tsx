import Image from "next/image";
import insta from "@/img/insta.png";
import facebook from "@/img/facebook.png";
import tiktok from "@/img/tiktok.png";

export default function Rodape() {
  return (
    <footer className="bg-purple-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Rodapé</h2>
        <div className="flex space-x-6">
          <Image src={insta} alt="Instagram logo" className="w-10 h-10" />
          <Image src={facebook} alt="Facebook logo" className="w-10 h-10" />
          <Image src={tiktok} alt="Tiktok logo" className="w-10 h-10" />
        </div>
      </div>
    </footer>
  );
}
