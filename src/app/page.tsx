import Image from "next/image";
import banner from "@/img/banner.jpg"

export default function Home() {
  return (
    <main>
        <Image src={banner} alt="Banner FreeSun"/>
      <div>
        <h2>Olá, nós somos a Free Sun Energy</h2>
        <p>A Free Sun Energy é uma empresa comprometida em transformar o acesso à energia sustentável, integrando inovação tecnológica e responsabilidade social. Nossa missão é promover soluções inteligentes e acessíveis que alinhem economia, sustentabilidade e impacto positivo, tanto para empresas quanto para comunidades de baixa renda. Com foco em fontes renováveis, como energia solar e eólica, buscamos criar um futuro onde a energia limpa seja uma realidade para todos.</p>
      </div>
      <div>
        <h2>O que nós fazemos?</h2>
        <p>Propomos um sistema de monitoramento em tempo real para empresas que utilizam fontes de energia sustentável, como solar e eólica. Esse sistema registrará a produção e o consumo de energia, gerando relatórios mensais detalhados. Quando a produção exceder o consumo, o excedente será redistribuído para comunidades de baixa renda, em parceria com a concessionária de energia local, reduzindo significativamente os custos de eletricidade para essas famílias. Além disso, as empresas participantes receberão créditos energéticos, que poderão ser convertidos em descontos futuros, criando um ciclo sustentável e vantajoso para todos os envolvidos.</p>
      </div>
      <div>
        <h2>E como funcionaria na prática?</h2>
        <p>Imagine uma empresa que gere 10.000 kWh por mês em energia solar, mas consuma apenas 8.000 kWh. O excedente de 2.000 kWh é direcionado, através de nossa parceria, para uma comunidade local de baixa renda, beneficiando dezenas de famílias. Caso a empresa continue gerando excedentes ao longo do ano, acumulará créditos energéticos que podem ser usados para reduzir custos operacionais futuros. Esse modelo cria uma relação ganha-ganha, unindo desenvolvimento econômico e inclusão social.</p>
      </div>
    </main>
  );
}
