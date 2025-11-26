import styles from'./App.module.css'
import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import IsraelEGaza from '../public/IsraelEGaza.png'
import Onu from '../public/Onu.png'
import Mapa from '../public/Mapa.png'
import Barreira from '../public/BarreiraDaCisjordania.png'
import Destruicao from '../public/Destruicao.png'
import Soldado from '../public/Soldado.png'

function App() {

  const [dados, setDados] = useState([])

  useEffect(() => {
      fetch('/card.json')
        .then(response => response.json())
        .then(data => {
          setDados(data)
        })
  }, [])
  
 return (
    <>
    <nav className={styles.menu}>
      <a href="#sessao1" > Conflito Entre Israel e Palestina </a>
      <a href="#sessao2" > Disputa Histórica </a>
      <a href="#sessao3" > Reivindicação e Mudança </a>
      <a href="#sessao4" > Aliados de Israel</a>
      <a href="#sessao5" > Apoios e Opiniões</a>
      <a href="#sessao6" > Não Mantém relação com Israel</a>
    </nav>

    <main>
      <section className={styles.sessao} id='sessao1'>
          <div className={styles.descricao}>
            <img className={styles.cardIMG} src={IsraelEGaza} alt='Imagem dos Dois Países'/>
            <h1 className={styles.h1}>Bandeira</h1>
            <p className={styles.p}>Israel e palestinos: entenda a origem do conflito e por que já dura décadas conflito entre Israel e o povo palestino, que é uma das disputas mais longas e violentas do mundo. Suas origens remontam há mais de um século. O conflito atual em Gaza, que é parte do conflito Israel-Hamas, começou em 7 de outubro de 2023. Portanto, até a data de hoje (17 de novembro de 2025), a guerra principal dura aproximadamente dois anos e um mês.</p>
        </div>
        </section>


        <section className={styles.sessao} id='sessao2'>
          <div className={styles.descricao}>
            <img className={styles.cardIMG} src={Mapa} alt='Mapa'/>
            <h1 className={styles.h1}>Controvérsia</h1>
            <p className={styles.p}>No entanto, é importante notar que: O conflito entre israelenses e palestinos por território se arrasta por décadas. Tem havido notícias recentes (novembro de 2025) sobre acordos de cessar-fogo e negociações de paz, embora a situação continue frágil e complexa.  Houve uma série de guerras entre Israel e nações árabes. Revoltas - chamadas intifadas - contra a ocupação israelense, e represálias e ataques por Israel também ocorreram. As consequências da disputa histórica sobre questões como terra, fronteiras e direitos continuam sendo sentidas.</p>
        </div>
        </section>
      

      <section className={styles.sessao} id='sessao3'>
          <div className={styles.descricao}>
            <img className={styles.cardIMG} src={Barreira} alt='Barreira'/>
            <h1 className={styles.h1}>Colaboradores</h1>
            <p className={styles.p}>Os judeus tinham laços históricos com a terra, mas os árabes palestinos também tinham uma reivindicação que remontava há séculos e se opunham à mudança. Embora diferentes governos tenham ficado à margem e outros tenham apoiado a resolução da Organização das Nações Unidas (ONU) que apelava à criação de dois Estados, Israel e Palestina, como solução para o conflito, ambas as populações tiveram o reconhecimento oficial em todo o mundo ao longo dos anos em países distintos.</p>
        </div>
        </section>

      
      <section className={styles.sessao} id='sessao4'>
          <div className={styles.descricao}>
            <img className={styles.cardIMG} src={Destruicao} alt='Destruicao'/>
            <h1 className={styles.h1}>Não Possuem Relação</h1>
            <p className={styles.p}>Reconhecimento e apoio a Israel: Estados Unidos, França, Alemanha, Itália, Reino Unido. Israel tem relações diplomáticas com 166 países, segundo o seu governo, com um forte bloco de apoio ocidental, que inclui os Estados Unidos, França, Alemanha, Itália e Reino Unido, que juntos anunciaram o seu apoio ao Estado após os ataques do grupo radical islâmico Hamas. Nos últimos anos, Israel reforçou as suas relações com os estados do Golfo Pérsico, impulsionado por uma animosidade partilhada em relação ao Irã e à sua crescente influência na região. Israel afirma que o Irã apoia o grupo radical islâmico Hamas com cerca de US$ 100 milhões por ano. O Departamento de Estado dos EUA afirmou em 2021 que o grupo recebe financiamento, armas e treinamento dos iranianos, bem como alguns fundos angariados em países do Golfo.</p>
        </div>
        </section>

      
      <section className={styles.sessao} id='sessao5'>
          <div className={styles.descricao}>
            <img className={styles.cardIMG} src={Onu} alt='Onu'/>
            <h1 className={styles.h1}>Opnião</h1>
            <p className={styles.p}>A guerra entre Israel e Palestina, sendo uma guerra muito extensa que parece não ter fim, tendo muitos conflitos e que parece não ter fim.</p>
        </div>
        </section>  

      <section className={styles.sessao} id='sessao6'>
          <div className={styles.descricao}>
            <h1 className={styles.h1}>Exigência</h1>
            <img className={styles.cardIMG} src={Soldado} alt='Soldado'/>
            <p className={styles.p}>Entre os países que atualmente não mantêm relações com Israel estão: Irã, Argélia, Afeganistão, Venezuela, Kuwait, Líbano, Líbia, Sudão, Síria, Arábia Saudita, Omã, Iraque, Paquistão, Qatar.</p>
        </div>
        </section>
    </main>
      
    </>
  )
}

export default App