interface CardProps {
  title: string,
  image: string,
  price: number
}

export function Card({title, image, price} : CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt=""/>
      <h2>{title}</h2>
      <p><b>Preço:{price}</b></p>
    </div>
  )
}