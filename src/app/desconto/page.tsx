"use client"

import Link from "next/link"

export default function Desconto(){
    return(
        <div>
        <div>
            <h2>Desconto aplicado</h2>
            <p>Você receberá 300 créditos para poder ser trocado em futuros descontos</p>
        </div>
        <div className="max-w-2xl mx-auto mt-8">
            <h2 className="text-xl font-bold text-center mb-4">Tabela de Créditos e Descontos</h2>
            <table className="table-auto w-full border-collapse border border-gray-200">
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
        <div>
                    <Link href={"/"}>
                    <button type="submit">Voltar para home</button>
                    </Link>
                </div>
        </div>
    )
}