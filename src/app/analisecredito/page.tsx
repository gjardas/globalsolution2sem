"use client";

import Link from "next/link";

export default function AnaliseCredito() {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-semibold text-center text-purple-800 mb-6">Contagem de créditos por consumo</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Qual foi sua produção de Kw deste mês?</label>
                        <input
                            type="text"
                            placeholder="Digite a quantidade de quilowatt produzida"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Qual foi o seu consumo de energia de Kw deste mês?</label>
                        <input
                            type="text"
                            placeholder="Digite a quantidade de quilowatt consumida"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Link href={"/desconto"}>
                            <button type="submit" className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300">Continuar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
