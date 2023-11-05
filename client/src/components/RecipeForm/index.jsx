import axios from 'axios';
import React, { useState } from 'react'

const IngredientsForm = ({recipies, setRecipies}) => {
    const [recipieData, setRecipieData] = useState({
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecipieData((prevState) => ({
            ...prevState, [name]: value
        }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios({
                method: "POST",
                url: "/server/recipies",
                data: recipieData
            })
            console.log(AuthenticatorResponse)
            if (response.status >= 200 && response.status < 300) {
                console.log('Added Recipe successfully:', response.data);
                setRecipies((recipies) => {
                    return [...recipies, response.data]
                })
            } else {
                console.error('Error registering event:', response.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={recipieData.title}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={recipieData.description}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input
                        type="text"
                        id="ingredients"
                        name="ingredients"
                        value={recipieData.ingredients}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="instructions">Instructions</label>
                    <input
                        type="text"
                        id="instructions"
                        name="instructions"
                        value={recipieData.instructions}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit!</button>
            </form>
        </div>


    )
}

export default IngredientsForm