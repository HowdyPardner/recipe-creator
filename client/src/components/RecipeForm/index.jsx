import React, { useState } from 'react'

const IngredientsForm = () => {
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

    return (
        <div>
            <form action="" onSubmit={() => handleSubmit()}>

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
                <button>Submit!</button>
            </form>
        </div>


    )
}

export default IngredientsForm