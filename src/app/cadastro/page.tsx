"use client"

import { TipoCadastro } from "@/types/types"
import { useState } from "react"

export default function Cadastro(){

    const [Cadastro, setCadastro] = useState<TipoCadastro>({
        nome:"",
        cnpj:""
    });

    const handleChange = (evento:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = evento.target;
        setCadastro({...Cadastro,[name]:value})
    }

    const handleSubmit = async(evento:React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault();
        try{
            const response = await fetch("ENDPOINT", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(Cadastro)
            });
        }catch (error){

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
                        <input type="text" name="nome" id="idNome" value={Cadastro.nome} onChange={(evento)=> handleChange(evento)} placeholder="Digite o nome da sua empresa" required/>
                    </div>
                    <div>
                        <label htmlFor="idCNPJ">CNPJ DA EMPRESA</label>
                        <input type="text" name="cnpj" id="idCNPJ" value={Cadastro.cnpj} onChange={(evento)=> handleChange(evento)} placeholder="Digite o CNPJ da sua empresa" required/>
                    </div>
                    <div>
                        <button type="submit">CADASTRAR</button>
                    </div>
                </form>
            </div>        
        </div>
    )
}