import { Card } from "./components/card";
import { useFoodData } from "./hooks/useFoodData";

function App() {
  const { data } = useFoodData();

  return (
    <main className="max-w-screen-lg mx-auto px-8 py-10">
      <h1 className="text-2xl text-zinc-100 text-center font-bold mb-10 underline underline-offset-4 decoration-zinc-100 md:text-4xl">Cardápio</h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        { data ? data.map((item) => (
          <Card 
            key={item.id}
            title={item.title} 
            image={item.image} 
            price={item.price} 
          />
        )): 
          <h2 className="text-zinc-100">Carregando...</h2>
        }
      </div>
    </main>
  )
}

export default App
