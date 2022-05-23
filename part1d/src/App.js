import { useState } from "react"


 //A proper place to define a component
 const Statistics = (props) => {
   if(props.all === 0) {
     return(
       <div>
         <h2>No feedback given</h2>
       </div>
     )
   }
    return (
      <div>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {props.all}</p>
        <p>Average: {props.average}</p>
        <p>Positive: {props.positive}</p>
      </div>
    )
}  


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
 
  //Get sum of all clicks
  const sumWithInitial = allClicks.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue);

  
  //Get average of all clicks
  const avgWithInitial = averageClicks.reduce(
     (previousValue, currentValue) => previousValue + currentValue, initialValue);
  
  const averageArray = (avgWithInitial/averageClicks.length) || 0;
    console.log('All Clicks length' , allClicks.length);
    console.log('Average array', averageArray);

  //Get positive vote percentage
  const positivePercent = (good/sumWithInitial)*100 + '%';   


  return (
    <div>
      <h1>give feedback</h1><br></br>
      <div>
        
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClicks}>bad</button>
        
      </div><br></br>

      <Statistics
            good = {good}
            neutral = {neutral}
            bad = {bad}
            all = {sumWithInitial}
            average = {averageArray}
            positive = {positivePercent}
      />

    </div>
  )

}

export default App