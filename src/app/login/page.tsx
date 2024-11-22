"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [cnpj, setCnpj] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/FreeSunEnergy/api/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ cnpj }),
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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="idCnpj">CNPJ</label>
                    <input type="text" id="idCnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} placeholder="Digite o CNPJ" required/>
                </div>
                {error && <p>{error}</p>}
                <div>
                    <button type="submit">Entrar</button>
                    <p><a href="/cadastro">Não tem cadastro? Faça clicando aqui</a></p>
                </div>
            </form>
        </div>
    );
}
