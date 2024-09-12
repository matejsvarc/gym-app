import { useState } from "react"
import Hero from "./components/Hero"
import Generator from "./components/Generator"
import Workout from "./components/Workout"
import { generateWorkout } from "./utils/functions"


function App() {
  const[workout, setWotkout] = useState(null)
  const[poison, setPoison] = useState('individual')
  const[muscles, setMuscles] = useState([])
  const[goals, setGoals] = useState('strenght_power')

  function updateWorkout () {
    if(muscles.length <1){
    let newWorkout = generateWorkout(poison, muscles, goals)
    setWotkout(newWorkout)
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator 
      poison={poison} 
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goals={goals}
      setGoals={setGoals}
      updateWorkout={updateWorkout} />
      {workout && (<Workout />)}
    </main>
  )
}

export default App
