"use client";

import { TipoCadastro } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cadastro() {
    const navigate = useRouter();

    const [cadastro, setCadastro] = useState<TipoCadastro>({
        nome: "",
        cnpj: "",
    });

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;
        setCadastro({ ...cadastro, [name]: value });
    };

    const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/FreeSunEnergy/api/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cadastro),
            });

            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                setCadastro({
                    nome: "",
                    cnpj: "",
                });

                navigate.push("/login");
            }
        } catch (error) {
            console.error("Falha no cadastro: ", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-semibold text-center text-purple-800 mb-6">Cadastro</h1>
                <h2 className="text-xl font-medium text-center text-purple-700 mb-4">CADASTRO DA EMPRESA</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="idNome" className="block text-gray-700 font-semibold">NOME DA EMPRESA</label>
                        <input
                            type="text"
                            name="nome"
                            id="idNome"
                            value={cadastro.nome}
                            onChange={(evento) => handleChange(evento)}
                            placeholder="Digite o nome da sua empresa"
                            required
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="idCNPJ" className="block text-gray-700 font-semibold">CNPJ DA EMPRESA</label>
                        <input
                            type="text"
                            name="cnpj"
                            id="idCNPJ"
                            value={cadastro.cnpj}
                            onChange={(evento) => handleChange(evento)}
                            placeholder="Digite o CNPJ da sua empresa"
                            required
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-6">
                        <Link href={"/analisecredito"}>
                        <button type="submit" className="w-full py-2 bg-purple-600 text-black font-semibold rounded-md hover:bg-purple-700 transition duration-300">CADASTRAR</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
