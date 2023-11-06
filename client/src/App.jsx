import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import RecipeForm from './components/RecipeForm';
import RecipeDisplay from './components/RecipeDisplay';
import Navbar from './components/Navbar';
import RecipeDetailsPage from './pages/RecipeDetailsPage';

function App() {
  const [recipes, setRecipes] = useState([])
  return (

    <div className='app-container container'>
      <div className='row'>
        <div className='app-container-navbar-container col'>
          <Navbar />
        </div>
       
      </div>
      <div className='col app-right-side'>
        <Routes>
          <Route path="/" element={<RecipeDisplay recipes={recipes} setrecipes={setRecipes} />} />
          <Route path='/recipe_display' element={<RecipeDisplay recipes={recipes} setrecipes={setRecipes} />} />
          <Route path='/create_recipe' element={<RecipeForm recipes={recipes} setrecipes={setRecipes} />} />
        </Routes>
      </div>
      <RecipeDetailsPage />
      </div>
     
  )
}

export default App
