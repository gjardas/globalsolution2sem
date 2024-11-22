import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-purple-900 text-white p-6 pb-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="" className="text-3xl font-semibold">
          <span>Free Sun Energy</span>
        </a>
        <div>
          <ul className="flex space-x-8">
            <li><Link href="/" className="hover:text-yellow-300 text-xl">Home</Link></li>
            <li><Link href="/sobrenos" className="hover:text-yellow-300 text-xl">Sobre nós</Link></li>
            <li><Link href="/login" className="hover:text-yellow-300 text-xl">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
