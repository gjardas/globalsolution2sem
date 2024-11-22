"use client";

import Link from "next/link";

export default function Desconto() {
    return (
        <div className="flex flex-col justify-center min-h-screen bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-black py-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full mx-auto">
                <h2 className="text-3xl font-semibold text-center text-purple-800 mb-4">Desconto aplicado</h2>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Você receberá 300 créditos para poder ser trocado em futuros descontos.
                </p>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-center mb-4">Tabela de Créditos e Descontos</h2>
                    <table className="table-auto w-full border-collapse border border-gray-200 mb-4">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left">Faixa de Créditos (kWh)</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Desconto (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white even:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">0 - 1.000</td>
                                <td className="border border-gray-300 px-4 py-2">0.1% - 5%</td>
                            </tr>
                            <tr className="odd:bg-white even:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">1.001 - 3.000</td>
                                <td className="border border-gray-300 px-4 py-2">5.1% - 10%</td>
                            </tr>
                            <tr className="odd:bg-white even:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">3.000+</td>
                                <td className="border border-gray-300 px-4 py-2">10.1% - 15%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center mt-4">
                    <Link href={"/"}>
                        <button type="button" className="py-2 px-6 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300">Voltar para home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
