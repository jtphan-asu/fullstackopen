import { useState } from 'react'


const MostVotes = (props) =>{
  return(
    <div>
      <p>
        {props.anecdotes}
      </p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)

  //Set 7 different empty states
  const [votes, setVote] = useState([0,0,0,0,0,0,0])

  //Use random number generator to change selected
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const handleVotes = () => {
   
    //create copy of votes array
    const copy = [...votes]

    //increment selected by 1
    copy[selected]++

    //Change state to new array
    setVote(copy)
  }

  //Find anecdote with most votes
  const findMostVotes = () => {
    let max = -1
    let maxKey = -1
    
    for(let key in votes){
      if(votes[key]>max){
        maxKey = key
        max = votes[key]
      }
    }
    return maxKey
  }

  return (
    <div>
      {anecdotes[selected]}<br></br>
      <h3>has {votes[selected]} votes</h3>
      <button onClick = {handleVotes}>Vote</button>
      <button id='nextAnecdote' onClick= {randomAnecdote}>Next Anecdote</button>
      <h1>Anecdote with most votes</h1>
      <MostVotes
            anecdotes = {anecdotes[findMostVotes()]}
      />

    </div>
  )
}

export default App