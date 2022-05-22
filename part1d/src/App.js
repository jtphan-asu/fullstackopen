import { useState } from "react"

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [averageClicks, setAvg] = useState([]);

  //handle good click
  const handleGoodClick = () => {
    setAll(allClicks.concat(1))
    setAvg(averageClicks.concat(1))
    setGood(good + 1)
  }

  //handle neutral click
  const handleNeutralClick = () => {
    setAll(allClicks.concat(1))
    setAvg(averageClicks.concat(0))
    setNeutral(neutral + 1)
  }
  
  //handle bad clicks
  const handleBadClicks = () => {
    setAll(allClicks.concat(1))
    setAvg(averageClicks.concat(-1))
    setBad(bad +1)
  }

  const initialValue = 0;
 
  const sumWithInitial = allClicks.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue);


    const avgWithInitial = averageClicks.reduce(
      (previousValue, currentValue) => previousValue + currentValue, initialValue);
  
  const averageArray = (avgWithInitial/averageClicks.length) || 0;
  console.log('All Clicks length' , allClicks.length);
  console.log('Average array', averageArray);

  return (
    <div>
      <h1>give feedback</h1><br></br>
      <div>
        
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClicks}>bad</button>
        
      </div><br></br>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {sumWithInitial}</p>
      <p>average {averageArray}</p>

    </div>
  )

}

export default App