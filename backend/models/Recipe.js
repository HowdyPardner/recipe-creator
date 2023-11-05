const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, },
        description: { type: String, },
        ingredients: { name: String, quantity: String, unit: String },
        instructions: { type: String },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // 'User' will be a reference to the User model
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date },
        tags: [{ type: String }],
        imageURL: { type: String, },
    },
    {
        timestamps: true
    }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
