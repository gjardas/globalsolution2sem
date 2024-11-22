"use client"

import { TipoCadastro } from "@/types/types"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Cadastro(){

    const navigate = useRouter();

    const [cadastro, setCadastro] = useState<TipoCadastro>({
        nome:"",
        cnpj:""
    });

    const handleChange = (evento:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = evento.target;
        setCadastro({...cadastro,[name]:value})
    }

    const handleSubmit = async(evento:React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault();
        try{
            const response = await fetch("http://localhost:8080/FreeSunEnergy/api/", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(cadastro)
            });

            if (response.ok) {
                alert("Cadastro realizado com sucesso!")
                setCadastro({
                    nome:"",
                    cnpj:""
                });

                navigate.push("/login")
            }
        }catch (error){
            console.error("Falha no cadastro: ", error);
        }
    }

    return(

        <div>
            <h1>Cadastro</h1>
            <div>
                    <h2>CADASTRO DA EMPRESA</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="idNome">NOME DA EMPRESA</label>
                        <input type="text" name="nome" id="idNome" value={cadastro.nome} onChange={(evento)=> handleChange(evento)} placeholder="Digite o nome da sua empresa" required/>
                    </div>
                    <div>
                        <label htmlFor="idCNPJ">CNPJ DA EMPRESA</label>
                        <input type="text" name="cnpj" id="idCNPJ" value={cadastro.cnpj} onChange={(evento)=> handleChange(evento)} placeholder="Digite o CNPJ da sua empresa" required/>
                    </div>
                    <div>
                        <button type="submit">CADASTRAR</button>
                    </div>
                </form>
            </div>        
        </div>
    )
}