import React, { useEffect, useState } from 'react'
import Graphics from './Chart'


const Content = () => {

  const [dates, setDates] = useState({
    start: '', end: ''
  })

  const [budget, setBudget] = useState('')
  const [graph, setGraph] = useState({
    labels: [], datasets: []
  })
  const handleBudget = (e) => {
    setBudget(e.target.value)
  }
  const handleDate = (startOrEnd, value) => {
    setDates({ ...dates, [startOrEnd]: value })
  }

  const handleBuild = () => {
    const X = (budget * 0.03).toFixed(0) // целевые действия
    const eCPM = (budget * 0.005).toFixed(2)

  const numberOfActions = []
      for(let i = 0; i <= X; i += 100) {
      numberOfActions.push(i)
      }
    // console.log(numberOfActions)     
    const labels = numberOfActions.map(() => ``)

    setGraph({
     // labels: [dates.start, dates.end],
      labels,
      datasets: [
        {
          label: 'Конверсии',
          data: numberOfActions, 
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)'
          }
        ],
        X, eCPM
    })
  }

  return (
    <>
      <div className='main-content'>
        <h3> Планировщик бюджета </h3>

        <button onClick={handleBuild}> 
          Построить новый план
        </button>

        <div className='input-fields'> 
          <fieldset>
            <legend> Даты проведения кампании </legend>
          <input 
            className='date-start' 
            type='date' 
            value={dates.start}
            onChange={(e) => handleDate('start', e.target.value)}
            />
          <input 
            className='date-end' 
            type='date'
            value={dates.end}
            onChange={(e) => handleDate('end', e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend> Общий бюджет </legend>
            <input 
               type='text' 
               value = {budget} 
               onChange={handleBudget} 
            /> ₽
          </fieldset>

          <fieldset>
            <legend> Целевое действие </legend>
            <select>
              <option> Конверсии </option>
              <option> Лиды </option>
              <option> Показы </option>
              <option> Клики </option>
              </select>
          </fieldset>

          <fieldset>
            <legend> Тип кампании </legend>
            <select>
              <option> Сайт </option>
              <option> Каталог товаров </option>
              <option> Мобильное приложение </option>
              <option> Дзен </option>
              <option> VK mini-apps </option>
              <option> одноклассники </option>
              <option> Лид-формы </option>
              <option> VK Сообщество </option>
              <option> Видео и трансляции </option>
            </select>
          </fieldset>

          <fieldset>
            <legend> Регионы показа </legend>
            <select>
              <option> Москва </option>
              <option> Санкт-Петербург </option>
              <option> Казань </option>
              <option> Новосибирск </option>
              <option> Другие регионы </option>
            </select>
          </fieldset>
        </div>

        < Graphics data={graph} /> 

        <div>
          <h4> Сохраненные отчеты </h4>
        </div>
      </div>
    </>
  )
}

export default Content

 /*
  useEffect(() => {
    // рассчет графика
  }, [budget, dates])
  */