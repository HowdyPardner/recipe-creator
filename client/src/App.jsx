import { useState } from 'react'
import './App.css'
import IngredientsForm from './components/RecipeForm';

function App() {
  /* 
    title: { type: String, required: true, },
    description: { type: String, },
    ingredients: [{ name: String, quantity: String, unit: String }],
    instructions: [{ type: String }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // 'User' will be a reference to the User model
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    tags: [{ type: String }],
    imageURL: { type: String, },
  */
  return (
    <>
        Hello from Main!
      <IngredientsForm />
      
    </>
  )
}

export default App
