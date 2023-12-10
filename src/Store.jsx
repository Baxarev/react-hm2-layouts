const Store = ({ products }) => {
  return (
    <div className='store-container'>
      {products.map((item, index) => {
        return (
          <div className='card' key={index}>
            <h2 className='card__title'>{item.name}</h2>
            <div className='card__color'>{item.color}</div>
            <div className='card__img-container'>
              <img src={item.img} alt={item.name}></img>
            </div>
            <div className='card__footer'>
              <div className='card__price'>${item.price}</div>
              <button className='card__btn'>add to card</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Store;