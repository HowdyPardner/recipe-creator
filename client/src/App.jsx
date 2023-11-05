import { useState } from 'react'
import './App.css'
import IngredientsForm from './components/RecipeForm';
import RecipeDisplay from './components/RecipeDisplay';

function App() {
  const [recipes, setrecipes] = useState([])
  return (

    <>
      Hello from Main!
      <IngredientsForm recipes={recipes} setrecipes={setrecipes} />
      <RecipeDisplay recipes={recipes} setrecipes={setrecipes} />
    </>
  )
}

export default App
