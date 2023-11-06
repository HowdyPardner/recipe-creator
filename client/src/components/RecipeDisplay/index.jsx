import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Pencil, XCircleFill } from 'react-bootstrap-icons';
import './index.css'
import { Modal, Button } from 'react-bootstrap';

const RecipeDisplay = ({ recipes, setrecipes }) => {

const [show, setShow] = useState(false);
const [itemToEdit, setItemToEdit] =useState({})

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

  const handleEditClick = (recipe) => {
    setItemToEdit(recipe)
    setShow(true);

  }

  const handleClose = () => {
    setShow(false)
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

  const handleSave = async () => {
    
   let response = await  axios({
      url:'/server/recipes',
      method:"PUT",
      data:itemToEdit
    })
    let updatedRecipes = recipes.map((currentRecipe)=>{
      if(currentRecipe._id === itemToEdit._id){
        return response.data;
      }else{
        return currentRecipe;
      }
    })
    console.log(updatedRecipes)
    setrecipes(updatedRecipes)
    console.log(response)
    setShow(false)
    returnSaveSuccessAlert();

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemToEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const returnSaveSuccessAlert = () =>{
    return (
      <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
    )
  }

  return (
    <div>
      <div className='container'>
        <div className='row flex d-flex justify-content-start p-4'>
          {recipes.map((currentRecipe) => (
            <div key={currentRecipe._id} className='col-sm-6 col-md-4 col-lg-3'>
              <Card id='recipe-card' className='recipe-card-component mb-3'>
                <div className='edit-delete-buttons'>
                  <Pencil className='edit-button' onClick={() => handleEditClick(currentRecipe)} />
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" name='title' onChange={handleInputChange} value={itemToEdit.title}/>
          <input type="text" name='description' onChange={handleInputChange} value={itemToEdit.description} />
          <input type="text" name='image' onChange={handleInputChange} value={itemToEdit.image} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default RecipeDisplay