
const Nutrition = () => {
  return (
    <div id="nutrition-section">
    <h2> Nutrition </h2>
    <p>
      The table below shows nutritional values per serving without the additional fillings.
    </p>

    <table>
      <tbody>
        <tr>
          <td className="column1"> Calories </td>
          <td className="column2"> 277 kcal </td>
        </tr>
      
        <tr>
          <td className="column1"> Carbs </td>
          <td className="column2"> 0g </td>
        </tr>
      
        <tr>
          <td className="column1"> Protein </td>
          <td className="column2"> 20g </td>
        </tr>
        <tr>
          <td className="column1" id="last1"> Fat </td>
          <td className="column2" id="last2"> 22g </td>
        </tr>
      </tbody>
    </table>
   </div>
  )
}

export default Nutrition