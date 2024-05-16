import Header from "./component/Header"
import Main from "./component/Main"
import Card from "./component/card"
import data from "./component/data"
import './App.css'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})   
  return (
      <div>
          <Header/>
          <Main/>
          <section>
            {cards}
          </section>
      </div>
  )
}

export default App
