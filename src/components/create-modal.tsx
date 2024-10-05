import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../hooks/useFoodDataMutate"
import { FoodData } from "../interface/FoodData"

interface InputProps {
  label: string
  value: string | number
  updateValue(value: any) : void
}

interface ModalProps {
  closeModal(): void
}

const Input = ({ label, value, updateValue}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label
        className="font-semibold text-zinc-200 mb-1"
        htmlFor={label} 
      >
        {label}
      </label>
      <input 
        className="bg-zinc-800 ring-2 ring-zinc-500 rounded-md p-2 text-zinc-200 outline-none focus:ring-emerald-600"
        id={label} 
        value={value} 
        onChange={e => updateValue(e.target.value)} 
        required
      />
    </div>
  )
}

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')

  const { mutate, isSuccess }= useFoodDataMutate()

  const handleSubmit = () => {
    const foodData: FoodData = {
      title, 
      image, 
      price
    }
    mutate(foodData)
  }

  useEffect(() => {
    if (!isSuccess) {
      return
    }
    closeModal()
  }, [isSuccess, closeModal])

  return (
    <dialog className="fixed p-3 inset-0 z-10 h-screen w-screen overflow-hidden flex items-center justify-center bg-zinc-900/70">
      <div className="bg-zinc-700 ring-2 ring-zinc-500 rounded-md shadow-lg p-6 max-w-lg w-full max-h-full">
        <div className="flex justify-between mb-8">
          <h2 className="text-lg font-semibold text-zinc-100">Cadastro de itens</h2>
          <button 
            className="text-zinc-100 bg-red-700 h-8 w-8 rounded-md transition hover:bg-red-600" 
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input label="Nome" value={title} updateValue={setTitle} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <Input label="Link da Imagem" value={image} updateValue={setImage}/>
          <button className="float-end text-zinc-100 bg-emerald-700 h-8 w-32 rounded-md transition hover:bg-emerald-600">Cadastrar</button>
        </form>
      </div>
    </dialog>
  )
}