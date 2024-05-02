import MainContent from './MainContent'
import DesktopPic from './product-desktop.jpg'
import MobilePic from './product-mobile.jpg'


const App = () => {
  return (
  <>
    <main>
      <picture> 
      <source media="(max-width: 768px)" srcSet= { MobilePic } alt="духи"/>
      <source media="(min-width: 768px)" srcSet= { DesktopPic } alt="духи"/>
      <img src={ MobilePic } alt="духи" />
    </picture>

    <MainContent />
    </main>
  </>
  )
}

export default App