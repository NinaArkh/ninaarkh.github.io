import Cart from './icon-cart.svg'

const Button = () => {
  return (
    <button> 
      <img id="icon" src={ Cart } alt="иконка корзины"/>
      <p>
        Add to Cart
      </p> 
    </button>
  )
}

export default Button