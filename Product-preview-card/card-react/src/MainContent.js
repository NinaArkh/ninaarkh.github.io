import Button from './Button'

const MainContent = () => {
  return (
    <div id="content">
    <span id="title"> PERFUME </span>
    <h1> Gabrielle Essence <br /> Eau De Parfum </h1>
    <p>
      A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
    </p>
    <div id="price">
      $149.99 
      <div id="price2"> 
        $169.99 
      </div>
    </div>
    <Button />
    </div>
  )
}

export default MainContent