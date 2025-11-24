import styles from'./App.module.css'
import { useState, useEffect } from 'react'
import { Card } from './components/Card'

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
      <a href="#sessao1" >Conflito Entre Israel e Palestina </a>
      <a href="#sessao2" > Disputa histórica </a>
      <a href="#sessao3" > Reivindicação e mudança </a>
      <a href="#sessao4" > Aliados de Israel</a>
      <a href="#sessao5" > Apoios e Opiniões</a>
      <a href="#sessao6" > Não mantém relação com Israel</a>
    </nav>

    <main>
      <section className={styles.sessao1} id='sessao1'>
          <div className={styles.wrapCards}>
            {dados.map((item) => {
              return(
                <div key={item.id}>
                  <Card tec={item.sessao} text={item.texto} image={item.imagem}/>
                </div>
              )
            })}
          </div>
        </section>
    </main>
      
    </>
  )
}

export default App