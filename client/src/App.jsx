import { useState } from 'react'
import './App.css'
import IngredientsForm from './components/RecipeForm';
import RecipeDisplay from './components/RecipeDisplay';

function App() {
  const [recipies, setRecipies] = useState([])
  return (

    <>
      Hello from Main!
      <IngredientsForm recipies={recipies} setRecipies={setRecipies} />
      <RecipeDisplay recipies={recipies} setRecipies={setRecipies} />
    </>
  )
}

export default App
