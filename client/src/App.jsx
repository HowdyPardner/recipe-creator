import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import IngredientsForm from './components/RecipeForm';
import RecipeDisplay from './components/RecipeDisplay';

function App() {
  const [recipes, setrecipes] = useState([])
  return (

    <>

     <nav>
      <Link to='/'>Home</Link>
      <Link to='/create_recipe'>Create A Recipe!</Link>
     </nav>

      <Routes>
        <Route path="/" element={<RecipeDisplay recipes={recipes} setrecipes={setrecipes} />} />
        <Route path='/recipe_display' element={<RecipeDisplay recipes={recipes} setrecipes={setrecipes} />} />
        <Route path='/create_recipe' element={<IngredientsForm recipes={recipes} setrecipes={setrecipes} />} />
      </Routes>
    </>
  )
}

export default App
