import axios from 'axios'
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ArrowRight, Pencil, XCircleFill } from 'react-bootstrap-icons';
import './index.css'
const RecipeDisplay = ({ recipies, setRecipies }) => {

  useEffect(() => {
    const fetchRecipies = async () => {
      try {
        const response = await axios('/server/recipies')
        console.log(response.data)
        setRecipies(...recipies, response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchRecipies();
  }, [])

  const handleEditClick = (recipeId) => {
    console.log('recipeId ', recipeId);
    axios({
      url: `/server/recipies/${recipeId}`,
      method: "PUT",
      data: {

      }
    })
  }

  const handleDelete = async (recipeId) => {
    let response = await axios({
      method: "DELETE",
      url: `/server/recipies/${recipeId}`
    })
    if (response.status === 200) {
      setRecipies(recipies.filter(recipie => recipie._id !== recipeId));
    }
  }

  return (
    <div>
      RecipeDisplay
      {recipies.map((currentRecipe) => (
        <Card key={currentRecipe._id} className='recipe-card-component'>
          <Pencil className='edit-button' onClick={() => handleEditClick(currentRecipe._id)} />
          <XCircleFill className='delete-button' onClick={() => handleDelete(currentRecipe._id)} />
          <Card.Body>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Title>Title:{currentRecipe.title}</Card.Title><br />
            <Card.Text>description:{currentRecipe.description}</Card.Text><br />

            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  )
}

export default RecipeDisplay