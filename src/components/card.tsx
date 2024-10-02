interface CardProps {
  title: string,
  image: string,
  price: number
}

export function Card({title, image, price} : CardProps) {
  return (
    <div className="bg-gradient-to-tl to-zinc-700/80 from-zinc-600/80 rounded-lg ring-2 ring-zinc-500 shadow-zinc-950 shadow-lg col-span-1 overflow-hidden">
      <img className="w-full h-56 object-cover" src={image} alt={title}/>
      <div className="p-4 space-y-2">
        <h2 className="text-zinc-200 capitalize text-base font-semibold md:text-lg">{title}</h2>
        <p className="text-zinc-300">
          <b className="font-semibold">Preço: </b>
          <b className="text-emerald-500">R${price.toFixed(2).replace('.', ',')}</b>
        </p>
      </div>
    </div>
  )
}