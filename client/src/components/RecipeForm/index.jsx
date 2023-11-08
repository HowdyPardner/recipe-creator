import axios from 'axios';
import React, { useState } from 'react';

const RecipeForm = ({ recipes, setRecipes }) => {
    const [recipeData, setRecipeData] = useState({
        title: '',
        description: '',
        ingredients: '',
        instructions: '',
        image: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecipeData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        setRecipeData((prevState) => ({
            ...prevState,
            image: file, 
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.files)
        try {
            const response = await axios.post('/server/recipes', recipeData);
            if (response.status >= 200 && response.status < 300) {
                console.log('Added Recipe successfully:', response.data);
                setRecipes((recipes) => {
                    return [...recipes, response.data];
                });
            } else {
                console.error('Error adding recipe:', response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={recipeData.title}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={recipeData.description}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <input
                        type="text"
                        id="ingredients"
                        name="ingredients"
                        value={recipeData.ingredients}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                        id="instructions"
                        name="instructions"
                        value={recipeData.instructions}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <textarea
                        type="text"
                        id="image"
                        name="image"
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit!
                </button>
            </form>
        </div>
    );
};

export default RecipeForm;
