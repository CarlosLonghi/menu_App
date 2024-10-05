import { useState } from "react";
import { Card } from "./components/card";
import { useFoodData } from "./hooks/useFoodData";
import { CreateModal } from "./components/create-modal";

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <main className="max-w-screen-lg mx-auto px-8 py-16">
      <h1 className="text-3xl text-zinc-100 text-center font-bold mb-10 underline underline-offset-4 decoration-zinc-100 md:text-4xl">Cardápio</h1>

      <button 
        className="bg-zinc-300 ring-2 ring-zinc-400 transition text-zinc-900 font-bold py-2 px-4 rounded-md fixed bottom-10 right-10 hover:bg-zinc-200 hover:ring-emerald-600 hover:text-zinc-950" 
        onClick={handleToggleModal}
      >
        Adicionar
      </button>
      {isModalOpen && <CreateModal closeModal={handleToggleModal}/>}
      
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
