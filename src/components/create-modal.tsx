import { useState } from "react"

interface InputProps {
  label: string
  value: string | number
  updateValue(value: any) : void
}

const Input = ({ label, value, updateValue}: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={e => updateValue(e.target.value)} />
    </>
  )
}

export function CreateModal() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')

  return (
    <div>
      <div>
        <h2>Cadastro de itens</h2>
        <form action="">
          <Input label="Nome" value={title} updateValue={setTitle} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <Input label="Imagem" value={image} updateValue={setImage}/>

          
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}