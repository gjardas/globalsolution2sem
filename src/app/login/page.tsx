"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [cnpj, setCnpj] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/login?cnpj=${cnpj}`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert("Login bem-sucedido!");
          router.push("/analisecredito");
        } else {
          setError("CNPJ não encontrado. Verifique os dados.");
        }
      } else {
        setError("Erro ao conectar ao servidor.");
      }
    } catch (err) {
      console.error("Erro ao tentar fazer login:", err);
      setError("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-center text-purple-800 mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="cnpj" className="block text-gray-700 font-semibold">CNPJ</label>
            <input
              type="text"
              id="cnpj"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              placeholder="Digite o CNPJ"
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="mt-6">
          <Link href={"/analisecredito"}>
            <button  type="submit" className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300">Entrar</button>
            </Link>
            <p className="mt-4 text-center">
              <a href="/cadastro" className="text-purple-700 hover:text-bg-purple-700">Não tem cadastro? Clique aqui</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

