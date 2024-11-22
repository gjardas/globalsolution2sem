"use client";

import Image from "next/image";
import Guilherme from "@/img/Guilherme.jpeg";
import Fernando from "@/img/Fernando.jpeg";
import Nathalia from "@/img/Nat.jpeg";

export default function SobreNos() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white flex items-center justify-center">
            <div className="max-w-7xl w-full px-6 py-8">
                <h1 className="text-3xl font-bold text-center text-white mb-8">Criadores da ideia e desenvolvedores do projeto</h1>
                <div className="flex flex-wrap justify-center gap-8">
                    
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                        <h2 className="text-xl font-semibold text-purple-800 mb-4">Guilherme Jardim - 1TDSPJ</h2>
                        <Image
                            src={Guilherme}
                            alt="Foto Guilherme"
                            className="w-40 h-40 object-cover rounded-full mx-auto mb-4"/>
                        <ul className="text-gray-700">
                            <li>Rm: 556814</li>
                            <li><a href="https://www.linkedin.com/in/guilherme-ferreira-jardim-22157a266/" target="_blank" className="text-purple-600">Perfil no LinkedIn</a></li>
                            <li><a href="https://github.com/gjardas/" target="_blank" className="text-purple-600">Perfil no GitHub</a></li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                        <h2 className="text-xl font-semibold text-purple-800 mb-4">Fernando Fontes - 1TDSPJ</h2>
                        <Image
                            src={Fernando}
                            alt="Foto Fernando"
                            className="w-40 h-40 object-cover rounded-full mx-auto mb-4"/>
                        <ul className="text-gray-700">
                            <li>Rm: 555317</li>
                            <li><a href="#" className="text-purple-600">Perfil no LinkedIn</a></li>
                            <li><a href="#" className="text-purple-600">Perfil no GitHub</a></li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                        <h2 className="text-xl font-semibold text-purple-800 mb-4">Nathália Gomes - 1TDSPJ</h2>
                        <Image
                            src={Nathalia}
                            alt="Foto Nathalia"
                            className="w-40 h-40 object-cover rounded-full mx-auto mb-4"/>
                        <ul className="text-gray-700">
                            <li>Rm: 554945</li>
                            <li><a href="#" className="text-purple-600">Perfil no LinkedIn</a></li>
                            <li><a href="#" className="text-purple-600">Perfil no GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
