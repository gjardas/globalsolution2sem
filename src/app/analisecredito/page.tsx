"use client"

import Link from "next/link"

export default function AnaliseCredito(){
    return(
        <div>
            <h2>Contagem de créditos por consumo</h2>
            <form>
                <div>
                    <label>Qual foi sua produção de Kw deste mês?</label>
                    <input type="text" placeholder="Digite a quantidade de quilowatt produzida"/>
                </div>
                <div>
                    <label>Qual foi o seu consumo de energia de Kw deste mês?</label>
                    <input type="text" placeholder="Digite a quantidade de quilowatt consumida"/>
                </div>
                <div>
                    <Link href={"/desconto"}>
                    <button type="submit">Continuar</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}