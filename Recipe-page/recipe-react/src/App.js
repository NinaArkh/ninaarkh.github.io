import Omelette from './image-omelette.jpeg'
import Header from './Header'
import Preparation from './Preparation'
import Instructions from './Instructions'
import Ingredients from './Ingredients'
import Nutrition from './Nutrition'


function App() {
  return (
  <>
  <main>
  <Header />
  <img src= { Omelette } alt="омлет" />
  <Preparation />
  <Ingredients />
  <Instructions />
  <Nutrition />
  </main>
  </>
  )
}

export default App