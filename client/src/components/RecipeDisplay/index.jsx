import axios from 'axios'
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Pencil, XCircleFill } from 'react-bootstrap-icons';
import './index.css'
const RecipeDisplay = ({ recipes, setrecipes }) => {

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios('/server/recipes')
        console.log(response.data)
        setrecipes(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchRecipes();
  }, [])

  const handleEditClick = (recipeId) => {
    console.log('recipeId ', recipeId);
    axios({
      url: `/server/recipes/${recipeId}`,
      method: "PUT",
      data: {

      }
    })
  }

  const handleDelete = async (recipeId) => {
    let response = await axios({
      method: "DELETE",
      url: `/server/recipes/${recipeId}`
    })
    if (response.status === 200) {
      setrecipes(recipes.filter(recipe => recipe._id !== recipeId));
    }
  }

  return (
    <div>
      <div className='container'>
        <div className='row flex d-flex justify-content-center justify-content-between p-4'>
          {recipes.map((currentRecipe) => (
            <div key={currentRecipe._id} className='col-sm-6 col-md-4 col-lg-3'>
              <Card id='recipe-card' className='recipe-card-component mb-3'>
                <div className='edit-delete-buttons'>
                  <Pencil className='edit-button' onClick={() => handleEditClick(currentRecipe._id)} />
                  <XCircleFill className='delete-button' onClick={() => handleDelete(currentRecipe._id)} />
                </div>
                <Card.Img variant='top' src={currentRecipe.image} />
                <Card.Body>
                  <Card.Title>Title: {currentRecipe.title}</Card.Title>
                  <Card.Text>Description: {currentRecipe.description}</Card.Text>
                  <Button variant='primary'>Learn More</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipeDisplay