import Logo from '../assets/vk-logo.png'
import rightLogo from '../assets/right-icon.png'

const Navbar = () => {

  return (
    <div className='top-section' >
      <div>
      <img className='image-1' src={ Logo } />
      </div>

      <div className='div-2'> 
      <img className='image-2' src= { rightLogo } />
      </div>
    
    </div>
  )
}
export default Navbar