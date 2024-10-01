import { Card } from "./components/card";
import { FoodData } from "./interface/FoodData";

function App() {
  const data: FoodData[] = [];

  return (
    <main className="max-w-screen-lg mx-auto px-8 py-10">
      <h1 className="text-4xl text-zinc-100">Cardápio</h1>
      
      <div className="grid-cols-3">
        {data.map((item) => (
          <Card 
            title={item.title} 
            image={item.image} 
            price={item.price} 
          />
        ))}
      </div>
    </main>
  )
}

export default App
