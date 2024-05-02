import icon1 from '../assets/icon1a.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import icon9 from '../assets/icon9.png'

const Sidebar = () => {

  return (
    <>
      <ul>
        <li id='first'> 
          <img className='icon' src={icon1} />
          Кампании </li>
        <li> 
          <img className='icon' src={icon2} />
          Аудитории </li>
        <li> 
          <img className='icon' src={icon3} />
          Бюджет </li>
        <li> 
          <img className='icon' src={icon4} />
          Обучение </li>
        <hr />
        <li> 
        <img className='icon' src={icon5} />
          Центр коммерции </li>
        <li> 
          <img className='icon' src={icon6} />
          Сайты </li>
        <li>
          <img className='icon' src={icon7} />
          Мобильные приложения </li>
        <li>
          <img className='icon' src={icon8} />
          Лид-формы </li>
        <br />
        <br />
        <br />
        <br />
        <li> 
          <img className='icon' src={icon4} />
          Настройки </li>
        <li>
          <img className='icon' src={icon9} />
           Помощь </li>
           <hr className='bottom-line' />
      </ul>
    </>
  )
}

export default Sidebar